<template>
  <div id="back">
    <div id="real">
      <div id="left">
        <button id="butt">수정하기</button>
        <button id="butt">삭제하기</button>
      </div>
    <div id="title">
      진영님 왜 저한테는 stash를 안 알려주셨나요ㅠ
    </div>
      <div id="details">작성자: 정민성 작성 날짜 : 2023-01-23</div>
    <div id="content">
      아니 진영님은 대체 어딜 가신거야<br>
      부르지도 않았는데;;;;<br>
      wefewfewfefefwfwefwefwefwefwefwe<br>
      아니 진영님은 대체 어딜 가신거야<br>
      아니 진영님은 대체 어딜 가신거야<br>
      아니 진영님은 대체 어딜 가신거야<br>
      아니 진영님은 대체 어딜 가신거야<br>
      아니 진영님은 대체 어딜 가신거야<br>

    </div>

    <button id="butt">댓글 보기</button>
    <div id="comment">
      <textarea>댓글을 입력하세요</textarea>
      <button id="butt">댓글 달기</button>
    </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#left{
  display: flex;
  justify-content: flex-end;
    margin-bottom: 15px;
}
#content{
  margin-top: 20px;
  height: 45%;
}
textarea{
  border: 1px solid orange;
  border-radius: 5px;
  width: 84%;
  height: 40px;
  padding: 10px;
}
#comment{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
#details{
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
