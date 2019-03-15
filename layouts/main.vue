<template>
  <div id="main-layout" class="layout">
    <section id="header">Header</section>
    <section id="content">
      <div class="content-div logo">
        <img src="https://s3.amazonaws.com/sample-login/companies/avatars/000/001/584/original/TEx_logo.jpg?1468432475">
      </div>
      <div class="content-div titulo"><h1>TEx Tecnologia</h1></div>
      <div class="content-div conteudo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus iste repellat delectus necessitatibus nulla odio officia dolor! Molestias quam hic facilis dolor nisi eius. Animi repellendus soluta alias. Adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sunt labore quaerat illo laboriosam. Impedit assumenda placeat laborum culpa magnam corrupti, ratione aliquam eaque vero, distinctio quae repudiandae, necessitatibus est.</div>
      <div class="conteudo-div propaganda">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, omnis ipsa doloribus, quis natus perspiciatis sequi incidunt veniam at architecto unde voluptate harum ut nihil expedita! Impedit sequi quibusdam iure!</div>
        <div>Aut voluptates accusamus deleniti in cum! Sed, inventore libero ab, quo a repellendus cumque aliquam error nihil culpa, sapiente placeat ad. Quae saepe a dolorum nihil rem! Dicta, ea. Soluta!</div>
      </div>
    </section>
    <section id="footer">Footer</section>
  </div>
</template>

<style lang="less">
#main-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 50px 1fr 30px;

  #header,
  #footer {
    color: white;
  }

  #header,
  #content,
  #footer {
    text-align: center;
  }

  #header {
    background-color: #110077;
  }

  #content {
    background-color: #fefefe;
    display: grid;
    grid-template-areas: "logo logo titulo" "logo logo titulo" "conteudo conteudo propaganda" "conteudo conteudo propaganda";
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 8px;
    padding: 8px 16px;

    .content-div {
      &.logo {
        grid-area: logo;
        img {
          width: 100%;
          height: 100%;
        }
      }

      &.titulo {
        grid-area: titulo;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font-weight: bold;
          font-size: 3rem;
          vertical-align: middle;
        }
      }
      &.conteudo {
        grid-area: conteudo;
      }

      &.propaganda {
        grid-area: propaganda;
        max-width: 100px;
      }
    }
  }

  #footer {
    background-color: #2211bb;
  }
}
</style>
