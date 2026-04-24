# 샤니 라이프 블로그

VitePress 기반 라이프스타일 블로그. Cloudflare Pages로 `life.shoneylife.com`에 배포.

## 프로젝트 구조

```
docs/
├── index.md                    # 홈페이지
├── posts/
│   ├── index.md                # 글 목록
│   ├── dating/                 # 소개팅
│   ├── places/                 # 장소 추천
│   │   ├── seoul/
│   │   └── busan/
│   └── life/                   # 기타 라이프
└── .vitepress/
    ├── config.mts
    ├── categories.ts
    └── theme/
```

## 새 글 작성

파일: `docs/posts/<카테고리>/YYYY-MM-DD-slug.md`

필수 프론트매터:
```markdown
---
title: 글 제목
date: YYYY-MM-DDThh:mm:ss
description: SEO 설명 (1-2문장)
---
```

## 카테고리

| id | 한글 | 용도 |
|----|------|------|
| dating | 소개팅 | 소개팅 팁, 연락법, 대화 주제 |
| places/seoul | 서울 | 서울 데이트 장소 |
| places/busan | 부산 | 부산 데이트 장소 |
| life | 라이프 | 기타 일상 |

## 배포

```bash
git add docs/posts/새파일.md
git commit -m "post: 글 제목"
git push
```

- GitHub: `shoney921/lifestyle-blog`
- 호스팅: Cloudflare Pages
- 도메인: `life.shoneylife.com`
- main 푸시 → 자동 배포

## 명령어

| 명령어 | 용도 |
|--------|------|
| `pnpm docs:dev` | 로컬 개발 서버 (localhost:5173) |
| `pnpm docs:build` | 프로덕션 빌드 |
