import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

export const databases = new Databases(client);

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const SERVICES_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_SERVICES_COLLECTION_ID || '';

export interface Service {
  $id: string;
  title_en: string;
  title_ar: string;
  title_bn: string;
  description_en: string;
  description_ar: string;
  description_bn: string;
  icon: string;
  order: number;
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      SERVICES_COLLECTION_ID
    );
    return response.documents as unknown as Service[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}
