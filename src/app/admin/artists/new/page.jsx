"use client";

import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewArtistPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', verified: false });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/artists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, verified: form.verified }),
      });
      if (!res.ok) throw new Error('Failed');
      router.push('/admin/artists');
    } catch (e) {
      setSubmitting(false);
      alert('Failed to create artist');
    }
  };

  return (
    <div>
      <PageHero pageTitle="Add new artist" />
      <form onSubmit={onSubmit} className="max-w-xl py-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="flex gap-3">
          <Button type="submit" disabled={submitting}>Create</Button>
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
        </div>
      </form>
      <PageBottom />
    </div>
  );
};

export default NewArtistPage; 