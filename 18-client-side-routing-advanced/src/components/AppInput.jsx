import clsx from 'clsx';
import { memo, useId, useState } from 'react';
import { bool, func, string } from 'prop-types';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import S from '@/styles/components/AppInput.module.css';
import { throttle } from '@/utils';

AppInput.propTypes = {
  label: string.isRequired,
  email: bool,
  password: bool,
  passwordConfirm: bool,
  isHiddenLabel: bool,
  onChange: func,
};

function AppInput({
  label,
  email = false,
  password = false,
  isHiddenLabel = false,
  onChange,
  ...restProps
}) {
  const id = useId();

  // ----------------------------------------------------------------

  const [type, setType] = useState(() => {
    let type = 'text';
    if (email) type = 'email';
    if (password) type = 'password';
    return type;
  });

  // ----------------------------------------------------------------

  const [inputValue, setInputValue] = useState('');

  const handleChange = throttle((e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange?.(value);
  }, 200);

  const isInputed = inputValue.trim().length > 0;

  // ----------------------------------------------------------------

  const [isVisible, setIsVisible] = useState(false);

  const visibleLabel = `패스워드 ${isVisible ? '감춤' : '표시'}`;

  const handleToggle = () => {
    if (isVisible) {
      setIsVisible(false);
      setType('password');
    } else {
      setIsVisible(true);
      setType('text');
    }
  };

  // ----------------------------------------------------------------

  let renderVisibleButton = null;

  if (type === 'password' || (type === 'text' && isVisible)) {
    renderVisibleButton = (
      <button
        type="button"
        className={S.visibleButton}
        aria-label={visibleLabel}
        title={visibleLabel}
        onClick={handleToggle}
      >
        {isVisible ? <VscEyeClosed /> : <VscEye />}
      </button>
    );
  }

  // ----------------------------------------------------------------

  return (
    <div className={clsx(S.component, isInputed && S.inputed)}>
      <label htmlFor={id} className={clsx({ 'sr-only': isHiddenLabel })}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={inputValue}
        onChange={handleChange}
        {...restProps}
      />
      {renderVisibleButton}
    </div>
  );
}

export default memo(AppInput);
