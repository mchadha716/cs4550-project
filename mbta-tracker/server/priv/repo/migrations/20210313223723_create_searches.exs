defmodule MbtaTracker.Repo.Migrations.CreateSearches do
  use Ecto.Migration

  def change do
    create table(:searches) do
      add :latitude, :float, null: false
      add :longitude, :float, null: false
      add :response, :map, null: true

      timestamps()
    end

  end
end
