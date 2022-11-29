export interface Document {
   id: string
   title: string
   content: string
}

//Requests

//Responses
export interface FetchAllDocumentsResponse {
   data: Document[]
}