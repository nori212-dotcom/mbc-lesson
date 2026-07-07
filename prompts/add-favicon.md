# 파비콘 추가 프롬프트

## 작업 개요
- **목적**: 특정 HTML 파일에 파비콘(Favicon) 설정 추가
- **대상 파일**: `01/index.html`
- **사용 리소스**: `01/img/pavicon.svg`

## 실행 프롬프트
> @01/img/pavicon.svg 를 @01/index.html 파비콘으로 넣어줘

## 적용 코드
```html
<link rel="icon" href="img/pavicon.svg" type="image/svg+xml">
```

## 참고 사항
- 파비콘 파일이 SVG 형식이므로 `type="image/svg+xml"` 속성을 포함함.
- 경로 설정 시 `index.html` 위치를 기준으로 상대 경로(`img/pavicon.svg`)를 사용함.
