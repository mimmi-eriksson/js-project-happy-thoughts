const Loader = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10">
      <div className="w-12 h-12 rounded-full border-7 border-(--color-accent) border-t-(--color-primary) animate-spin"></div>
      <p>Loading messages...</p>
    </div>
  )
}

export default Loader