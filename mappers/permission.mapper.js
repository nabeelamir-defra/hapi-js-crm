export const mapPermission = (permission) => {
  return {
    licenceNumber: permission.defra_name,
    contact: {
      id: permission.defra_ContactId.contactid,
      fullName: permission.defra_ContactId.fullname
    }
  }
}