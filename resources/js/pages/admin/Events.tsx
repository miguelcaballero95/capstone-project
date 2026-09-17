export default function AdminEventsPage() {
  return (
    <div className="min-h-screen bg-background text-slate-900">
      <header className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 md:px-8">
        <span className="text-2xl font-bold tracking-tight text-blue-700">
          EventsApp
        </span>
        <div className="flex items-center gap-3 text-slate-600">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-lg hover:bg-slate-200"
            aria-label="Notifications"
          >
            ♢
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-lg hover:bg-slate-200"
            aria-label="Account"
          >
            ◉
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-73px)] flex-col md:flex-row">
        <aside className="w-full shrink-0 bg-slate-100/70 p-4 md:w-64 md:p-6">
          <nav className="flex flex-row gap-2 md:flex-col">
            <a
              href="#events"
              className="flex flex-1 items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-blue-700 md:flex-none"
            >
              <span aria-hidden="true">▣</span>
              <span className="text-sm font-bold">Events</span>
            </a>
            <a
              href="#applications"
              className="flex flex-1 items-center gap-3 rounded-lg px-4 py-3 text-slate-500 hover:bg-slate-200 hover:text-blue-700 md:flex-none"
            >
              <span aria-hidden="true">▤</span>
              <span className="text-sm font-medium">Applications</span>
            </a>
          </nav>
        </aside>

        <main className="flex-1 px-6 py-8 md:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="flex items-end justify-between">
              <h1 className="text-2xl font-bold tracking-tight">Managed Events</h1>
              <span className="text-sm text-slate-500">Organizer dashboard</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <article className="overflow-hidden rounded-xl bg-white shadow-md">
                <div className="flex h-48 items-center justify-center bg-blue-100 text-5xl text-blue-700">
                  ✦
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold">Hamilton Summer Festival</h2>
                  <div className="flex flex-col gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true">◷</span>
                      <span>July 15 - 18, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true">⌖</span>
                      <span>Bayfront Park, Hamilton</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end border-t border-slate-200 pt-6">
                    <button type="button" className="text-sm font-bold text-blue-700 hover:text-blue-800">
                      Manage
                    </button>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-xl bg-white shadow-md">
                <div className="flex h-48 items-center justify-center bg-amber-100 text-5xl text-amber-700">
                  ✧
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold">Autumn Craft Market</h2>
                  <div className="flex flex-col gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true">◷</span>
                      <span>Oct 12 - 14, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true">⌖</span>
                      <span>Cotton Factory, Hamilton</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end border-t border-slate-200 pt-6">
                    <button type="button" className="text-sm font-bold text-blue-700 hover:text-blue-800">
                      Manage
                    </button>
                  </div>
                </div>
              </article>

              <button
                type="button"
                className="flex min-h-100 flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-slate-600 hover:border-blue-500 hover:bg-blue-50"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-4xl text-slate-600">
                  +
                </span>
                <span className="text-lg font-bold">Create a new event</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}