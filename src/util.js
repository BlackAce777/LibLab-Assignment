export const Schemas = {
  movie: [
    {
      propertyName: "name",
      displayName: "Name",
    },
    {
      propertyName: "academyAwardNominations",
      displayName: "AcademyAwardNominations",
    },
    {
      propertyName: "academyAwardWins",
      displayName: "AcademyAwardWins",
    },
    {
      propertyName: "boxOfficeRevenueInMillions",
      displayName: "BoxOfficeRevenueInMillions",
    },
    {
      propertyName: "budgetInMillions",
      displayName: "BudgetInMillions",
    },
    {
      propertyName: "rottenTomatoesScore",
      displayName: "RottenTomatoesScore",
    },
    {
      propertyName: "runtimeInMinutes",
      displayName: "RuntimeInMinutes",
    },
  ],
  character: [
    {
      propertyName: "name",
      displayName: "Name",
    },
    {
      propertyName: "birth",
      displayName: "Birth",
    },
    {
      propertyName: "death",
      displayName: "Death",
    },
    {
      propertyName: "gender",
      displayName: "Gender",
    },
    {
      propertyName: "hair",
      displayName: "Hair",
    },
    {
      propertyName: "height",
      displayName: "Height",
    },
    {
      propertyName: "race",
      displayName: "Race",
    },
    {
      propertyName: "realm",
      displayName: "Realm",
    },
    {
      propertyName: "wikiUrl",
      displayName: "Wiki URL",
    },
  ],
  quote: [
    {
      propertyName: "character",
      displayName: "Character ID",
    },
    {
      propertyName: "dialog",
      displayName: "Dialog",
    },
    {
      propertyName: "movie",
      displayName: "Movie ID",
    },
  ],
};
export const TABLE_TYPE = [
  {
    propertyName: "movie",
    displayName: "Movie",
  },
  {
    propertyName: "character",
    displayName: "Character",
  },
  {
    propertyName: "quote",
    displayName: "Quote",
  },
];
export const MAIN_URI = "https://the-one-api.dev/v2/";
