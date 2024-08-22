import { escapeODataStringValue } from '../utils/dynamics-utils.js'
import { dynamicsClient } from '../services/dynamic-client.js';

export const permissionForFullReferenceNumber = async permissionReferenceNumber => {
  let filter = `defra_name eq '${escapeODataStringValue(permissionReferenceNumber)}'`
  filter += ` and statecode eq 0`

  /** @type {import('dynamics-web-api').RetrieveRequest */
  const dynamicsRequest = {
    collection: "defra_permissions",
    filter,
    expand: "defra_ContactId"
  }

  const permission = await dynamicsClient.retrieve(dynamicsRequest)
  return permission
}