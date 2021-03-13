import styled from 'styled-components'

export const Container = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  
  .postsContainer {
    padding: 0 16px;
    article {
        margin-bottom: 32px;
    }

  }
  .postsContainer__post {
    a {
      color: inherit;
      font-weight: bold;
      text-decoration: none;
    }
    h2, small {
        margin: 0;
    }
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    section {
        /* border: 1px solid #000; */
    padding: 0 16px;

    }
    section, h2 {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
    small {
        display: inline-block;
        width: 100%;
    }
    a {
        color: #bebebe;
    }
  } 
`