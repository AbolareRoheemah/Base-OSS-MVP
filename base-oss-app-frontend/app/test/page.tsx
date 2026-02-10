import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  try {
    // Test 1: Fetch profiles
    const { data: profiles, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .limit(3)

    // Test 2: Fetch issues
    const { data: issues, error: issueError } = await supabase
      .from('issues')
      .select('*')
      .limit(3)

    // Test 3: Fetch with joins
    const { data: issuesWithRepo, error: joinError } = await supabase
      .from('issues')
      .select(`
        *,
        repositories (
          name,
          github_url,
          projects (
            name,
            category
          )
        )
      `)
      .limit(3)

    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Database Connection Test</h1>
          
          {/* Profiles Test */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              ✅ Test 1: Profiles ({profiles?.length || 0})
            </h2>
            {profileError ? (
              <p className="text-red-600">Error: {profileError.message}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                {JSON.stringify(profiles, null, 2)}
              </pre>
            )}
          </div>

          {/* Issues Test */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              ✅ Test 2: Issues ({issues?.length || 0})
            </h2>
            {issueError ? (
              <p className="text-red-600">Error: {issueError.message}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                {JSON.stringify(issues, null, 2)}
              </pre>
            )}
          </div>

          {/* Join Test */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              ✅ Test 3: Issues with Repos ({issuesWithRepo?.length || 0})
            </h2>
            {joinError ? (
              <p className="text-red-600">Error: {joinError.message}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                {JSON.stringify(issuesWithRepo, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            ❌ Connection Failed
          </h1>
          <p className="text-gray-700">
            {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    )
  }
}