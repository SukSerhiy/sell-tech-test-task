import { gql, useQuery } from '@apollo/client'

const GET_APPLICATION_INDIVIDUAL_COMPANY_RELATIONS = gql`
  query ApplicantIndividualCompanyRelations($where: QueryApplicantIndividualCompanyRelationsWhereWhereConditions) {
    applicantIndividualCompanyRelations(where: $where) {
      data {
        id
        name
      }
    }
  }
`

const GET_APPLICATION_INDIVIDUAL_COMPANY_POSITIONS = gql`
  query ApplicantIndividualCompanyPositions($where: QueryApplicantIndividualCompanyPositionsWhereWhereConditions) {
    applicantIndividualCompanyPositions(where: $where) {
      data {
        id
        name
      }
    }
  }
`

export const useGetRelations = ({ search } : { search: string | null; }): any => {
  let variables = {}
  if (search) {
    variables = {
      ...variables,
      where: {
        column: "NAME",
        operator: "LIKE",
        value: search
      }
    }
  }
  const { data } = useQuery(GET_APPLICATION_INDIVIDUAL_COMPANY_RELATIONS, {
    variables
  });
  return data;
}

export const useGetPositions = ({ search } : { search: string | null; }): any => {
  let variables = {}
  if (search) {
    variables = {
      ...variables,
      where: {
        column: "NAME",
        operator: "LIKE",
        value: search
      }
    }
  }
  const { data } = useQuery(GET_APPLICATION_INDIVIDUAL_COMPANY_POSITIONS, {
    variables
  });
  return data;
}
