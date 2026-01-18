# 📱 Phone Vault

스마트폰 사용 시간을 효과적으로 관리할 수 있는 디지털 웰빙 웹 애플리케이션입니다.

## 📋 프로젝트 개요

Phone Vault는 스마트폰 과의존을 방지하고 건강한 디지털 습관을 형성할 수 있도록 돕는 웹 기반 타임락 시스템입니다. 사용자는 스마트폰을 '보관'하고 설정된 시간 동안만 '꺼내서' 사용할 수 있습니다.

## ✨ 주요 기능

### 🔒 보관/꺼내기 시스템
- **스마트폰 보관**: 디바이스를 가상의 금고에 보관
- **시간 제한 꺼내기**: 5분, 30분, 1시간 또는 사용자 정의 시간으로 설정
- **실시간 타이머**: 남은 사용 시간 실시간 표시

### ⚙️ 두 가지 사용 모드

#### 1. 고정시간 모드
- 하루 최대 사용 시간 설정 (예: 3시간)
- 일일 남은 시간 시각화 (원형 다이어그램)
- 사용 시간 자동 추적 및 누적

#### 2. 자율 모드
- 회당 최대 사용 시간 설정 (예: 60분)
- 대기 시간 설정 (예: 30분)
- 유연한 사용 패턴 지원

### 📞 추가 기능
- **전화 연락처**: 긴급 연락처 관리
- **알람**: 꺼낸 상태에서도 알람 사용 가능
- **외출 모드**: 특별한 상황을 위한 임시 해제
- **시뮬레이션**: 전화 걸기/받기 시뮬레이션

## 🛠 기술 스택

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.4.1
- **Styling**: CSS Modules
- **Storage**: LocalStorage API
- **Additional Libraries**:
  - canvas-confetti (축하 효과)

## 🚀 시작하기

### 사전 요구사항
- Node.js (v16 이상 권장)
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/jbaehova/phonevault.git
cd phonevault
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 `http://localhost:5173` 접속

### 빌드

프로덕션 빌드 생성:
```bash
npm run build
```

빌드 결과 미리보기:
```bash
npm run preview
```

## 💾 데이터 저장

Phone Vault는 모든 데이터를 브라우저의 LocalStorage에 저장합니다:

- **사용 모드 설정**: 고정시간/자율 모드 설정
- **사용 시간 제한**: 각 모드별 시간 제한 값
- **일일 사용 기록**: 날짜별 사용 시간 누적
- **세션 정보**: 현재 꺼낸 상태의 세션 정보
- **금고 상태**: 보관/꺼낸 상태

## 📱 주요 화면

### 1. 홈 화면 (`/`)
- 현재 상태 표시 (보관중/꺼낸 상태)
- 남은 사용 시간 실시간 표시
- 보관하기 버튼
- 사용 모드별 상세 정보

### 2. 메뉴 (`/menu`)
- 전화
- 설정
- 꺼내기

### 3. 꺼내기 (`/unlock`)
- 빠른 선택: 5분, 30분, 1시간
- 사용자 정의 시간 입력 (최대 60분)

### 4. 설정 (`/settings`)
- 사용모드 설정
- 연결 설정
- 소리, 조명, 알림 설정
- 기타 설정

## 🔧 핵심 로직

### 세션 관리 (vaultStorage.js)

```javascript
// 세션 시작
startUnlockSession(durationMinutes)

// 세션 종료 및 사용 시간 기록
completeSessionAndStore()

// 남은 시간 계산
getSessionRemainingSeconds()

// 일일 남은 시간 계산
getEffectiveDailyRemainingSeconds(limitHours)
```

### 상태 관리
- **vaultState**: `'stored'` | `'taken-out'`
- **unlockSession**: 세션 시작 시간, 지속 시간, 만료 시간
- **dailyUsage**: 날짜별 사용 시간 누적

## 🎯 사용 시나리오

### 고정시간 모드
1. 하루 3시간 사용으로 설정
2. 필요할 때 30분씩 꺼내서 사용
3. 사용 후 보관하면 자동으로 사용 시간 차감
4. 남은 시간은 원형 다이어그램으로 확인

### 자율 모드
1. 회당 60분, 대기 30분으로 설정
2. 최대 60분까지 자유롭게 사용
3. 사용 후 30분 대기 시간 필요
4. 반복적인 짧은 사용에 적합

## 🤝 기여하기

버그 리포트, 기능 제안, 풀 리퀘스트를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👤 개발자

**Johnny Bae** - [@jbaehova](https://github.com/jbaehova)

## 🙏 감사의 말

이 프로젝트는 디지털 웰빙과 건강한 스마트폰 사용 습관을 위해 만들어졌습니다.

---

**⚠️ 주의사항**
- 이 앱은 웹 기반 시뮬레이션이며, 실제 디바이스를 물리적으로 잠그지 않습니다.
- 효과적인 사용을 위해서는 개인의 자제력과 의지가 필요합니다.
- 긴급 상황에서는 언제든지 디바이스에 접근할 수 있습니다.
