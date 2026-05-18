# Al Naseir Business Solutions - Appwrite Setup Guide

## Prerequisites
- Appwrite account at [appwrite.io](https://appwrite.io)
- Node.js and npm/pnpm installed

## Step 1: Create Appwrite Project

1. Sign up/login to [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Note down:
   - **Project ID** (from project settings)
   - **Endpoint URL** (usually https://cloud.appwrite.io/v1)

## Step 2: Create Database and Collection

1. Go to **Databases** section
2. Create a new database, name it: `business_db`
3. Note the **Database ID**
4. Create a new collection called: `services`
5. Note the **Collection ID**

## Step 3: Add Attributes to Services Collection

Add these attributes to the services collection:

| Attribute | Type | Required |
|-----------|------|----------|
| `title_en` | String | Yes |
| `title_ar` | String | Yes |
| `title_bn` | String | Yes |
| `description_en` | String | Yes |
| `description_ar` | String | Yes |
| `description_bn` | String | Yes |
| `details_en` | String | No |
| `details_ar` | String | No |
| `details_bn` | String | No |
| `icon` | String | Yes |
| `order` | Integer | Yes |

## Step 4: Sample Services Data

Add documents to your services collection:

```json
{
  "title_en": "Business Setup & Formation",
  "title_ar": "تأسيس الأعمال والتكوين",
  "title_bn": "ব্যবসা প্রতিষ্ঠা এবং গঠন",
  "description_en": "Complete assistance with company registration, documentation, and legal setup",
  "description_ar": "مساعدة كاملة في تسجيل الشركة والوثائق والإعداد القانوني",
  "description_bn": "কোম্পানি নিবন্ধন, ডকুমেন্টেশন এবং আইনি সেটআপে সম্পূর্ণ সহায়তা",
  "details_en": "We handle all aspects of company formation including legal documentation, regulatory compliance, and establishment of your business structure.",
  "details_ar": "نتعامل مع جميع جوانب تكوين الشركة بما في ذلك الوثائق القانونية والامتثال التنظيمي وإنشاء هيكل عملك.",
  "details_bn": "আমরা কোম্পানির গঠনের সমস্ত দিক পরিচালনা করি যার মধ্যে রয়েছে আইনি ডকুমেন্টেশন, নিয়ন্ত্রক সম্মতি এবং আপনার ব্যবসায়িক কাঠামো প্রতিষ্ঠা।",
  "icon": "Briefcase",
  "order": 1
}
```

Available icons: `Briefcase`, `FileText`, `Users`, `Building2`, `Shield`, `HeadphonesIcon`, `Scale`, `Globe2`, `Landmark`, `CreditCard`, `ClipboardCheck`, `Truck`

## Step 5: Set Environment Variables

Add these to your `.env.local` file:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=business_db
NEXT_PUBLIC_APPWRITE_SERVICES_COLLECTION_ID=services
```

## Step 6: Run the Application

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to see your website.

## Features Implemented

✅ Multilingual Support (English, Arabic, Bangla)
✅ Services loaded from Appwrite Database
✅ Single Page with all services
✅ Individual service detail pages
✅ RTL support for Arabic
✅ Professional UI with shadcn/ui
✅ Responsive design

## Support

For issues:
1. Check Appwrite console for database errors
2. Verify environment variables are set correctly
3. Check browser console for client-side errors
