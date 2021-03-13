defmodule MbtaTrackerWeb.SearchView do
  use MbtaTrackerWeb, :view
  alias MbtaTrackerWeb.SearchView

  def render("index.json", %{searches: searches}) do
    %{data: render_many(searches, SearchView, "search.json")}
  end

  def render("show.json", %{search: search}) do
    %{data: render_one(search, SearchView, "search.json")}
  end

  def render("search.json", %{search: search}) do
    %{id: search.id,
      latitude: search.latitude,
      longitude: search.longitude,
      response: search.response}
  end
end
