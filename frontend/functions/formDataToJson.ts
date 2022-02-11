export default async function formDataToJson(formData: FormData) {
  return JSON.stringify(Object.fromEntries(formData));
}