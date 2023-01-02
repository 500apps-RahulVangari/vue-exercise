<template>
    <div class="bg-home">
        <h1 class="head">This is the Home File </h1>
        <p class="para">Here There are 4 MCQ's and 4 Fill in the Blanks</p>
        <p class="para1">There are 4 MCQ's in the MCQ Tab section <br/>For Correct Answer it will Add +1 otherwise -1</p>
        <p class="para1">There are 4 Fill in the Blank's in the FB Tab section <br/>For Correct Answer it will Add +1 otherwise -1</p>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style>
    .head{
        padding:20px;
        font-weight:bold;
        font-size: 30px;
        font-family: "Roboto";
        color:white;
    }
    .para{
        color:white;
        font-weight: bold;
        font-size: 20px;
    }
    .bg-home{
        background-color: rgb(111, 118, 123);
        height:30vh;
        background-size:cover;
        margin:0px;
    }
    .para1{
        color:rgb(181, 181, 89);
        font-weight: bold;
    }
</style>
