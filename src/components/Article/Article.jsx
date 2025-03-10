import "./Article.css"

export default function Article(props) {

  return (
  <>
    <h1 className="article-heading">Nadpis: {props.heading}</h1>
    <p className="article-desc">Popisek: {props.desc}</p>
    <p className="article-content">Obsah: {props.content}</p>
    <p className="article-author">Autor: {props.author}</p>
  </>
  )
}