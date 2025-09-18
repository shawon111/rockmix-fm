"use client";

import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewGenrePage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', display_name: '' });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/genres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      router.push('/admin/genres');
    } catch (e) {
      setSubmitting(false);
      alert('Failed to create genre');
    }
  };

  return (
    <div>
      <PageHero pageTitle="Add new genre" />
      <form onSubmit={onSubmit} className="max-w-xl py-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="display_name">Display name</Label>
          <Input id="display_name" value={form.display_name} onChange={(e) => setForm({ ...form, display_name: e.target.value })} required />
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

export default NewGenrePage; 