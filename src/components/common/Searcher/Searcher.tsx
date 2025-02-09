import React, { FunctionComponent } from 'react';
import { Field, Form } from "react-final-form";
import { SearcherProps } from "../../../types/props/SearcherProps";
import { SearchFormData } from "../../../types/serchFormData";
import style from "./Searcher.module.css";

const Searcher: FunctionComponent<SearcherProps> = ({setFilterName, headline, placeholder}: SearcherProps) => {
  const onSearch = (formData: SearchFormData): void =>  {
    if (setFilterName) {
      setFilterName(formData.searcher);
    }
  }

  return (
    <div className={style.formBlock}>
      <Form onSubmit={onSearch} render={({ handleSubmit }) => (
        <form className={style.form} onSubmit={handleSubmit}>
            <p className={style.title}>{headline}</p>
          <Field name="searcher" parse={value => value}>
            {({ input }) => (
              <div className={style.inputBlock}>
                <button className={style.button}>
                  <svg className={style.icon} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.5078 31.6484L28.4766 24.6172C28.125 24.3359 27.7031 24.125 27.2812 24.125H26.1562C28.0547 21.6641 29.25 18.5703 29.25 15.125C29.25 7.10938 22.6406 0.5 14.625 0.5C6.53906 0.5 0 7.10938 0 15.125C0 23.2109 6.53906 29.75 14.625 29.75C18 29.75 21.0938 28.625 23.625 26.6562V27.8516C23.625 28.2734 23.7656 28.6953 24.1172 29.0469L31.0781 36.0078C31.7812 36.7109 32.8359 36.7109 33.4688 36.0078L35.4375 34.0391C36.1406 33.4062 36.1406 32.3516 35.5078 31.6484ZM14.625 24.125C9.63281 24.125 5.625 20.1172 5.625 15.125C5.625 10.2031 9.63281 6.125 14.625 6.125C19.5469 6.125 23.625 10.2031 23.625 15.125C23.625 20.1172 19.5469 24.125 14.625 24.125Z" fill="#517361"/>
                  </svg>
                </button>
                <input {...input} className={style.field} type="text" placeholder={placeholder} autoComplete="off"/>
              </div>
            )}
          </Field>
        </form>
      )} />
    </div>
  )
}

export default Searcher;
