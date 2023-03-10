/**
 * Verify if point of coordinates (longitude, latitude) is polygon of coordinates
 * https://github.com/substack/point-in-polygon/blob/master/index.js
 * @param {number} point_x Latitude
 * @param {number} point_y Longitude
 * @param {array<[number,number]>} polygon Polygon contains arrays of points. One array have the following format: [latitude,longitude]
 */
export default function isPointInPolygon (point_x, point_y, polygon) {
    if (typeof point_x !== 'number' || typeof point_y !== 'number') {
      throw new TypeError('Invalid latitude or longitude. Numbers are expected')
    } else if (!polygon || !Array.isArray(polygon)) {
      throw new TypeError('Invalid polygon. Array with locations expected')
    } else if (polygon.length === 0) {
      throw new TypeError('Invalid polygon. Non-empty Array expected')
    }

    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0]; const yi = polygon[i][1] // polygon edge start point x,y
      const xj = polygon[j][0]; const yj = polygon[j][1] // polygon edge end point x,y
      const pointBetweenLineEndpoints = (yi > point_y) !== (yj > point_y)
      const intersection = (point_x < (xj - xi) * (point_y - yi) / (yj - yi) + xi)
      const crossedPolygonBoundary = pointBetweenLineEndpoints && intersection
      if (crossedPolygonBoundary) inside = !inside
    }
  
    return inside
  };