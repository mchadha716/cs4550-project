defmodule MbtaTracker.Searches.Search do
  use Ecto.Schema
  import Ecto.Changeset

  schema "searches" do
    field :latitude, :float
    field :longitude, :float
    field :response, :map

    timestamps()
  end

  @doc false
  def changeset(search, attrs) do
    search
    |> cast(attrs, [:latitude, :longitude, :response])
    |> validate_required([:latitude, :longitude, :response])
  end
end
