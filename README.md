# Analog Clock
아날로그 시계를 구현한 페이지입니다.

## 환경
**React Next Typescript**

**Statement management : Zustand**


## 주요 기능
- index.tsx
  - 시/분/초침이 표시될 각도 계산 함수 : `setHourDeg` `setMinuteDeg` `setSecondDeg`
  - 시간 업데이트 관련 함수 : `savedCallback` `intervalAddSecond`
  - 마우스 이벤트 핸들러 : `handleMouseOver` `handleMouseMove` `handleMouseOut`
  - 현재 시간 툴팁 컴포넌트 : `ToolTip`
- HandBox.tsx
  - 시/분/초침 컴포넌트
- store.ts
  - currentTime: 현재 시간을 초 단위로 표시
  - position: 마우스의 현재 x, y 좌표
  - isHover: 시계에 마우스 오버 여부
  - isAnimating: 애니메이션 진행 여부
- utils.ts
  - useMounted: 컴포넌트 마운트 여부
  - getHourFromSeconds: 현재 시간
  - getMinuteFromSeconds: 현재 분
  - getSecondFromSeconds: 현재 초