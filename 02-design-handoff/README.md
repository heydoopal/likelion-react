## 🎨 240722 디자인 → 개발 핸드오프 과제

### 수행 조건

테스트는 다음 조건을 충족해야 합니다.

- [x] 모두가 접근 가능
- [x] 의미있는 구조 설계
- [x] 체계적인 표현 설계
- [x] 원할한 상호작용 설계

<br>

### 수행 과정 기록

![](https://velog.velcdn.com/images/zidoopal/post/c0168bd8-5a83-49b6-9e7a-dc27b1f1b9e9/image.png)

- [x] **파일 세팅**

  - 폴더구조 <br>

  ```
  📦 src
   ┣ 📂 assets
   ┃ ┣ 📂 images (과제관련 이미지)
   ┃ ┗ 📜 design-to-develop_handoff.fig (과제 시안)
   ┣ 📜 styles.css
   ┣ 📜 index.html
  📜 README.md
  ```

- [x] **마크업**
  - 여기선 어떤 시멘틱 태그를 사용해야 할까 고민되었습니다.. 🤔
    리스트 디자인이므로 ul > li로 마크업 해보았습니다.
  - 이미지의 정보제공을 위해 alt 속성을 최대한 잘 전달해보려..했습니당.
- [x] **스타일링**
  - Pretendard 글꼴 적용
  - 전체 margin/padding 0, box-sizing: border-box 적용
  - ul 태그 (list)
    - gap: 4px 적용 (각 item 간의 간격)
    - flex-direction: column
  - li 태그 (list-item)
    - gap 20px 적용 (img 와 글자 간격)
    - padding: 20px
  - span태그 (문구)
    - width: 100% 속성을 주어 가로 너비를 가득 차게 함
