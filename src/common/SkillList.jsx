
// eslint-disable-next-line react/prop-types
const SkillList = ({src, skill}) => {
  return (
    <span>
        <img src={src} alt="Checkmark Icon" />
            <p>{skill}</p>
    </span>
  )
}

export default SkillList