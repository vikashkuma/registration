import React, { Fragment } from 'react';

const renderField = ({
  input,
  label,
  type,
  dValue,
  disabled = false,
  meta: { touched, error, warning },
  options = {}
}) => (
  <div className="form-group required">
    <label className="control-label">{label}</label>
    <input
      className="form-control"
      {...input}
      placeholder={label}
      type={type}
      defaultValue={dValue}
      disabled={disabled}
      maxLength={options.maxLength}
    />
    {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

// const renderOptionalField = ({
//   input,
//   label,
//   type,
//   dValue,
//   disabled = false,
//   meta: { touched, error, warning },
//   options = {}
// }) => (
//   <div className="form-group">
//     <label className="control-label">{label}</label>
//     <input
//       className="form-control"
//       {...input}
//       placeholder={label}
//       type={type}
//       defaultValue={dValue}
//       disabled={disabled}
//       maxLength={options.maxLength}
//     />
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const renderOptionalFieldWithoutLabel = ({ input, label, type, meta: { touched, error, warning }, options = {} }) => (
//   <div className="form-group">
//     <input className="form-control" {...input} placeholder={label} type={type} maxLength={options.maxLength} />
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const searchFieldWithIcon = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div className="form-group required search-field">
//     <label className="control-label">{label}</label>
//     <TooltipComponent message={hAffiliations} />
//     <div className="clearfix">
//       <input className="form-control" {...input} placeholder={label} type={type} />
//       <span className="input-group-append">
//         <button className="btn btn btn-secondary search-btn rounded-0" type="button">
//           <FontAwesome icon={faSearch} className="" />
//         </button>
//       </span>
//     </div>
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const renderFieldWithIcon = ({ input, label, type, meta: { touched, error, warning }, option }) => (
//   <div className="form-group required">
//     <label className="control-label">{label}</label>
//     <TooltipComponent message={option} />
//     <input className="form-control" {...input} placeholder={label} type={type} />
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const selectionRenderField = props => {
//   const renderSelectOptions = (key, index) => {
//     const optionKey = `${index}-${key}`;
//     return (
//       <option
//         key={optionKey}
//         value={key}
//       >
//         {props.options[key]}
//       </option>
//     );
//   };

//   if (props && props.options) {
//     return (
//       <Fragment>
//         <label className="control-label">{props.label}</label>
//         <select {...props.input} className="form-control">
//           {Object.keys(props.options).map(renderSelectOptions)}
//         </select>
//       </Fragment>
//     );
//   }
//   return <div></div>;
// };

// const subPartMobileNumber = ({ input, label, type, meta: { touched, error, warning }, options = {} }) => (
//   <div className="form-group">
//     <input className="form-control" {...input} placeholder={label} type={type} maxLength={options.maxLength} />
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const notEditableRenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div className="form-group required">
//     <label className="control-label">{label}</label>
//     <input className="form-control" {...input} placeholder={label} type={type} readOnly />
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

// const renderTextAreaField = ({ input, label, styleClass, type, meta: { touched, error, warning } }) => {
//   const textareaClass = `form-control ${styleClass}`;
//   return (
//     <div className="form-group required">
//       <label className="control-label">{label}</label>
//       <textarea className={textareaClass} {...input} placeholder={label} type={type} />
//       {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   );
// };

// const
//   autosearchField = ({
//     input,
//     label,
//     type,
//     suggestions,
//     keyValuePair,
//     keyBasedFilter,
//     meta: { touched, error, warning },
//     onSelectSuggestion
//   }) => (
//     <div className="form-group required search-field clearfix">
//       <label className="control-label">{label}</label>
//       <TooltipComponent message={Organization} />
//       <div className="searchInput">
//         <Autocomplete
//           className="form-control"
//           {...input}
//           placeholder={label}
//           type={type}
//           suggestions={suggestions}
//           keyValuePair={keyValuePair}
//           keyBasedFilter={keyBasedFilter}
//           onSelectSuggestion={onSelectSuggestion}
//         />
//         <span className="input-group-append">
//           <button className="btn btn btn-secondary search-btn rounded-0" type="button">
//             <FontAwesome icon={faSearch} className="" />
//           </button>
//         </span>
//       </div>
//       {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   );

// const renderRadioButtonField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <label className="input-radio">
//     <span className="align-baseline">{label}</span>
//     <input {...input} type={type} />
//     <span className="radiobox"></span>
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </label>
// );

// const renderCheckBoxField = ({ input, label, type, checked, meta: { touched, error, warning } }) => (
//   <label className="input-checkbox">
//     <span className="align-baseline">{label}</span>
//     <input {...input} type={type} checked={checked} />
//     <span className="checkbox"></span>
//     {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
//   </label>
// );

export default {
  renderField
  // searchFieldWithIcon,
  // renderFieldWithIcon,
  // renderOptionalField,
  // renderOptionalFieldWithoutLabel,
  // autosearchField,
  // subPartMobileNumber,
  // notEditableRenderField,
  // selectionRenderField,
  // renderRadioButtonField,
  // renderCheckBoxField,
  // renderTextAreaField
};
