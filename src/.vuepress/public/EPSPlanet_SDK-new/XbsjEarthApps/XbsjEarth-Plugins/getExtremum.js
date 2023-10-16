/* eslint-disable */
// import * as turf from "@turf/turf";

function getExtremum(earth, polygon, cellsize) {
    return new Promise(resolve => {
        //1.先计算边界矩形框
        let positions = []
        polygon.forEach(p => {
            positions.push([turf.radiansToDegrees(p[0]), turf.radiansToDegrees(p[1])])
        })
        positions.push([turf.radiansToDegrees(polygon[0][0]), turf.radiansToDegrees(polygon[0][1])])
        let geojson = turf.polygon([positions])
        let bbox = turf.bbox(geojson);
        console.log(bbox)
        //2.在矩形范围框内进行均匀采样
        var cellSide = cellsize;//采样间隔
        var options = { units: 'meters' };

        var grid = turf.pointGrid(bbox, cellSide, options);
        console.log(grid)
        //3.取出在绘制范围内的采样点
        let withinPos = turf.pointsWithinPolygon(grid, geojson);
        // let cartesianPositions = []
        //4.获取采样点的高程
        earth.czm.scene.globe.depthTestAgainstTerrain = true
        // let inPos = []
        let heights = []
        withinPos.features.forEach(p => {
            let pos = p.geometry.coordinates
            // inPos.push([pos[0], pos[1], getSampleHeight(earth.czm.scene, pos)])
            heights.push(getSampleHeight(earth.czm.scene, pos))
        })
        let max = Math.max(...heights)
        let min = Math.min(...heights)
        resolve([min, max])
        // return [min, max]
        // drawPoints(inPos)
    })


}
function Cartesian3ToJWD(viewer, cartesian3) {
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    var lon = Cesium.Math.toDegrees(cartographic.longitude);
    var alt = cartographic.height;
    return [lon, lat, alt]
}
function getSampleHeight(scene, p) {
    var c = new Cesium.Cartographic.fromDegrees(p[0], p[1]);
    return scene.sampleHeight(c);
}
function getSampleHeightMostDetailed(p) {
    var c = new Cesium.Cartographic.fromDegrees(p[0], p[1]);
    return scene.sampleHeightMostDetailed(c);
}
export default { getExtremum }