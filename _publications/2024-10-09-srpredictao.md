---
title: "SR-PredictAO: Session-based Recommendation with High-Capability Predictor Add-On"
collection: publications
category: conferences
permalink: /publication/2024-10-09-srpredictao
excerpt: "Identifies the overlooked low-capability predictor in encoder–predictor session-based recommenders and introduces a pluggable high-capability predictor add-on that mitigates random user behavior and consistently boosts existing models."
date: 2024-10-09
venue: 'ICDM 2024 (Regular Paper)'
paperurl: 'https://doi.org/10.1109/ICDM59182.2024.00055'
slidesurl: 'https://ust-waylon.github.io/files/ICDM2024_SR_PredictAO.pdf'
codeurl: 'https://github.com/rickyskywalker/sr-predictao-official'
arxivurl: 'https://arxiv.org/abs/2309.12218'
citation: 'R. Wang, R. C.-W. Wong, and W. Tan, “SR-PredictAO: Session-Based Recommendation with High-Capability Predictor Add-On,” 2024 IEEE International Conference on Data Mining (ICDM), pp. 480–489, Dec. 2024, doi: 10.1109/ICDM59182.2024.00055.'
---

**Authors:** [Ruida Wang](https://rickyskywalker.github.io), [Raymond Chi-Wing WONG](https://cse.hkust.edu.hk/~raywong/), **Weile Tan**

**Venue:** ICDM 2024 (Regular Paper; acceptance rate 66/604 = 10.9%)

**Links:** [arXiv](https://arxiv.org/abs/2309.12218) · [Paper](https://doi.org/10.1109/ICDM59182.2024.00055) · [Code](https://github.com/rickyskywalker/sr-predictao-official) · [Slides](https://ust-waylon.github.io/files/ICDM2024_SR_PredictAO.pdf)

### Abstract

Session-based recommendation, aiming at making the prediction of the user's next item click based on the information in a single session only, even in the presence of some random user's behavior, is a complex problem. This complex problem requires a high-capability model of predicting the user's next action. Most (if not all) existing models follow the encoder-predictor paradigm where all studies focus on how to optimize the encoder module extensively in the paradigm, but they overlook how to optimize the predictor module. In this paper, we discover the critical issue of the low-capability predictor module among existing models. Motivated by this, we propose a novel framework called *Session-based Recommendation with Predictor Add-On* (SR-PredictAO). In this framework, we propose a high-capability predictor module which could alleviate the effect of random user's behavior for prediction. It is worth mentioning that this framework could be applied to any existing models, which could give opportunities for further optimizing the framework. Extensive experiments on two real-world benchmark datasets for three state-of-the-art models show that *SR-PredictAO* out-performs the current state-of-the-art model by up to 2.9% in HR@20 and 2.3% in MRR@20. More importantly, the improvement is consistent across almost all the existing models on all datasets, and is statistically significant, which could be regarded as a significant contribution in the field.
