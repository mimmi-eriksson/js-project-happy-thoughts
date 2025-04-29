const SocialButton = ({ link, icon, text }) => {
  return (
    <li>
      <a href={link} target="_blank">
        <img
          className="w-5 h-5 invert"
          src={icon}
          alt={text} />
      </a>
    </li>
  )
}

export default SocialButton