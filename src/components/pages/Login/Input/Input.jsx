import './Input.css';

function Input({labelFor, labelName, inputType, inputId}) {
  return (
    <div class="input-wrapper">
      <label for={labelFor}>{labelName}</label>
      <input type={inputType} id={inputId} />
    </div>
  );
}

export default Input;