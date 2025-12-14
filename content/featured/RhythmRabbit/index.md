---
date: '3'
title: 'Rhythm Rabbit'
github: 'https://github.com/muhammadhaider02/Music-Streaming-and-Recommendation-System'
cover: './demo.png'
external: ''
cta: ''
tech:
  - PySpark
  - Kafka
  - MongoDB
  - Azure
  - Flask
  - Librosa
---

A distributed content-based music recommender built on a cluster of Azure VMs, processing 80GB+ of audio and metadata. Implements ETL pipelines with Librosa for audio feature extraction and PySpark ML for KNN-based similarity search. Features Kafka pipelines to capture real-time user interactions and dynamic playlist updates, with indexed MongoDB retrieval and Flask streaming supporting sub-200ms recommendation responses under concurrent load.
