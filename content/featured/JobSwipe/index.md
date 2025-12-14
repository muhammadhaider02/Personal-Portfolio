---
date: '2'
title: 'JobSwipe'
cover: './demo.png'
github: ''
external: ''
tech:
  - Next.js
  - Flask
  - Supabase
  - FAISS
  - Redis
  - LLMs
---

A job recommendation platform with a Reels-style swipe interface built on Flask and Next.js. Implements NLP pipelines to extract skills from resume uploads and uses Sentence Transformers with FAISS for semantic candidate-role matching. Features Redis caching and background daemon threads for optimized LLM-based parsing, enabling automated generation of tailored applications for matched positions with Supabase authentication.
