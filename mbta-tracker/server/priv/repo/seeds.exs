# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     MbtaTracker.Repo.insert!(%MbtaTracker.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias MbtaTracker.Repo
alias MbtaTracker.Searches.Search

lat = 42.3398
lon = -71.0892

api_key = System.get_env("API_KEY")
url = "https://api-v3.mbta.com/predictions?api_key=" <> api_key <> 
  "&filter[latitude]=" <> to_string(lat) <> "&filter[longitude]="
  <> to_string(lon)

resp = HTTPoison.get!(url)
resp = Jason.decode!(resp.body)

#name = Enum.at(resp["data"], 1)["attributes"]["name"]

NuSearch = Repo.insert!(%Search{latitude: lat, longitude: lon, 
	response: resp}) 