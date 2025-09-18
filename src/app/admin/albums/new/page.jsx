"use client";

import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewAlbumPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', release_date: '' , owner_id: ''});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/albums', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, release_date: form.release_date, owner_id: form.owner_id }),
      });
      if (!res.ok) throw new Error('Failed');
      router.push('/admin/albums');
    } catch (e) {
      setSubmitting(false);
      alert('Failed to create album');
    }
  };

  return (
    <div>
      <PageHero pageTitle="Add new album" />
      <form onSubmit={onSubmit} className="max-w-xl py-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner">Owner ID</Label>
          <Input id="owner" value={form.owner_id} onChange={(e) => setForm({ ...form, owner_id: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="release">Release date</Label>
          <Input id="release" type="date" value={form.release_date} onChange={(e) => setForm({ ...form, release_date: e.target.value })} />
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

export default NewAlbumPage; 