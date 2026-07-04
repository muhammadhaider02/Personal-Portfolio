---
date: '3'
title: 'JobScout'
cover: './demo.png'
github: 'https://github.com/muhammadhaider02/Scrapling-Job-Boards-Scrapper'
external: 'https://www.jobswipe.cloud'
tech:
  - Python
  - Scrapling
  - Redis
  - Supabase
  - GitHub Actions
---

A fully unattended job board scraper that keeps a live index of fresh listings, running in production as the ingestion engine behind JobSwipe. Stealth browsers with Cloudflare solving and headful fallback sweep LinkedIn and Indeed across 60 curated roles, with 8 scheduled runs a day alternating between boards and Redis-backed SHA-256 deduplication keeping every cycle clean. Scraped postings flow through an enrichment pipeline that extracts skills, salary ranges, experience levels and job types with confidence scoring before landing in Supabase.
