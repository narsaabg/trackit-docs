
// This page is intentionally empty or redirected as pricing moved to the landing page to satisfy the 3-page UI layout (Landing, Changelog, Docs).
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();
  useEffect(() => { navigate('/', { replace: true }); }, []);
  return null;
}
