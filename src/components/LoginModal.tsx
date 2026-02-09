type LoginModalProps = {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-6">
      <div className="panel-card w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold uppercase tracking-widest">Please Log In</div>
          <button
            className="ghost-button h-9 w-9 px-0"
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div className="mt-6 space-y-4">
          <input className="input-field" placeholder="Enter your in-game username" type="text" />
          <button className="primary-button w-32" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
