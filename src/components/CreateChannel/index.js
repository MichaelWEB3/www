import React from "react";
import Input from "../Input";
import InputTextArea from "../InputTextArea";
import { Form } from "@unform/web";
import { AiOutlineCheckCircle } from "react-icons/ai";
import * as S from "./styles";
import Channel from "../../Connections/channel";

function CreateChannel({ changeVisible }) {
  const channel = new Channel();

  async function handleSubmit(data) {
    try {
      await channel.createChannel(data);

      changeVisible();
    } catch (err) {
    }
  }



  return (
    <S.Container>
      <S.Form>
        <Form onSubmit={handleSubmit}>
          <Input
            className="Producer"
            name="name"
            placeholder="Qual o nome da sua produtora?"
            required
          />
          <InputTextArea
            className="Story"
            name="bio"
            placeholder="Conte um pouco da sua história"
            required
          />

          <div className="foundedBy">
            <Input
              className="Founded"
              name="founded_at"
              placeholder="Fundado em"
              mask="99/99/9999"
              required
            />
            <Input className="By" name="founder" placeholder="Por" required />
          </div>

          <div className="goalContainer">
            <p className="goalText">Qual a sua meta hoje?</p>
            <div>
              {/* <Input className='Goal' name="goal" placeholder='Primeira meta' /> */}
              <div className="Map">
                <Input
                  className="Goal"
                  name="aims"
                  placeholder="sua meta"
                  required
                />
                {/* {data.map((item, index) => {
                  return (
                    <div className="addItem" key={String(index)}>
                      <Input
                        className={item.className}
                        name="aims"
                        placeholder={item.placeholder}
                      />
                      {data.length === index + 1 ? (
                        <div className="Button" onClick={() => Push(index)}>
                          +
                        </div>
                      ) : (
                          <div className="Remove" onClick={() => Pop(item.id)}>
                            -
                          </div>
                        )}
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
          <button className="Finish" type="submit">
            Finalizar
            <div className="Icon">
              <AiOutlineCheckCircle size={20} />
            </div>
          </button>
        </Form>
      </S.Form>
    </S.Container>
  );
}

export default CreateChannel;
