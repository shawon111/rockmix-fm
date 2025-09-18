"use client";

import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewTrackPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', owner_id: '', album_name: '' });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, owner_id: form.owner_id, album_name: form.album_name }),
      });
      if (!res.ok) throw new Error('Failed');
      router.push('/admin/tracks');
    } catch (e) {
      setSubmitting(false);
      alert('Failed to create track');
    }
  };

  return (
    <div>
      <PageHero pageTitle="Add new track" />
      <form onSubmit={onSubmit} className="max-w-xl py-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner_id">Owner ID</Label>
          <Input id="owner_id" value={form.owner_id} onChange={(e) => setForm({ ...form, owner_id: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="album_name">Album name (optional)</Label>
          <Input id="album_name" value={form.album_name} onChange={(e) => setForm({ ...form, album_name: e.target.value })} />
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

export default NewTrackPage; 