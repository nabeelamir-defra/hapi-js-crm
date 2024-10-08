import { permissionForFullReferenceNumber } from '../queries/permission.queries.js';
import { mapPermission } from '../mappers/permission.mapper.js';

export default [
  {
    method: "GET",
    path: "/licence",
    /**
     * Handler for fetching a permission by it's full licence number.
     *
     * @param {import('@hapi/hapi').Request request} - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
     * @returns {import('@hapi/hapi').ResponseObject} - A response containing the permission or an error
     */
    handler: async (request, h) => {
      console.time('test');
      try {
        const permission = await permissionForFullReferenceNumber(request.query.fullLicenceNumber)
        console.log(JSON.stringify(permission.value[0], null, 2))
        const mappedPermission = mapPermission(permission.value[0])
        console.timeEnd('test');
        return h.response(mappedPermission).code(200);
      } catch (error) {
        console.error("Error fetching licence:", error);
        console.timeEnd('test');
        return h.response({ error: "Unable to fetch licence" }).code(500);
      }
    },
  }
]