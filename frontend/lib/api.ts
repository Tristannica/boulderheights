// lib/api.ts

// Once deployed via Terraform:
// You’ll switch NEXT_PUBLIC_API_URL to your App Runner domain or API Gateway URL
// You can even route through a custom domain like api.boulderheights.community
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getEntries() {
  const res = await fetch(`${BASE_URL}/entries/`);
  if (!res.ok) {
    throw new Error('Failed to fetch entries');
  }
  return res.json();
}

export async function createEntry(data: {
  latitude: number;
  longitude: number;
  label: string;
  address?: string;
}) {
  const res = await fetch(`${BASE_URL}/entries/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to create entry');
  }

  return res.json();
}