import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateEnd: any;
  DateTime: any;
  EMAIL: any;
  JSON: any;
  Mixed: any;
  StringInteger: any;
};

export type Accounts = {
  __typename?: 'Accounts';
  account_name: Scalars['String'];
  account_number: Scalars['String'];
  account_state: Scalars['String'];
  account_type: Scalars['String'];
  activated_at?: Maybe<Scalars['DateTime']>;
  available_balance: Scalars['Int'];
  client: ApplicantIndividual;
  commission_template_id?: Maybe<CommissionTemplate>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency_id?: Maybe<Currencies>;
  current_balance: Scalars['Int'];
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  is_primary?: Maybe<Scalars['Boolean']>;
  owner_id?: Maybe<Members>;
  payment_provider_id?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  reserved_balance: Scalars['Int'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type AccountsPaginator = {
  __typename?: 'AccountsPaginator';
  data: Array<Accounts>;
  paginatorInfo: PaginatorInfo;
};

export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']>;
};

export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_individual?: Maybe<ApplicantIndividual>;
  can_create_payment: Scalars['Boolean'];
  can_sign_payment: Scalars['Boolean'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Float'];
  day_used_limit?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  month_used_limit?: Maybe<Scalars['Float']>;
  monthly_limit: Scalars['Float'];
  operation_limit: Scalars['Float'];
};

export type ApplicantBankingAccessPaginator = {
  __typename?: 'ApplicantBankingAccessPaginator';
  data: Array<ApplicantBankingAccess>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  applicant_state?: Maybe<ApplicantState>;
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Companies>;
  company_info_additional_fields?: Maybe<Scalars['JSON']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  company_type?: Maybe<Scalars['String']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EMAIL']>;
  expires_at?: Maybe<Scalars['Date']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  kyc_level?: Maybe<ApplicantRiskLevel>;
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  language?: Maybe<Languages>;
  license_number?: Maybe<Scalars['String']>;
  manager?: Maybe<Members>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  office_address?: Maybe<Scalars['String']>;
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  phone?: Maybe<Scalars['String']>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  reg_at?: Maybe<Scalars['Date']>;
  reg_number?: Maybe<Scalars['String']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  state?: Maybe<Scalars['String']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  tax?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  data: Array<ApplicantCompanyBusinessType>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  data: Array<ApplicantCompanyLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantCompanyModulesPaginator = {
  __typename?: 'ApplicantCompanyModulesPaginator';
  data: Array<ApplicantCompanyModules>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  applicant?: Maybe<ApplicantCompany>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note: Scalars['String'];
};

export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  data: Array<ApplicantCompanyNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  data: Array<ApplicantCompany>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyRiskLevel = {
  __typename?: 'ApplicantCompanyRiskLevel';
  applicant?: Maybe<ApplicantCompany>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  applicant_company_id?: Maybe<ApplicantCompany>;
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  manager_id?: Maybe<Members>;
  risk_level_id?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  data: Array<ApplicantCompanyRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyRiskLevelPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelPaginator';
  data: Array<ApplicantCompanyRiskLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  address?: Maybe<Scalars['String']>;
  applicant_state?: Maybe<ApplicantState>;
  birth_at?: Maybe<Scalars['Date']>;
  birth_city?: Maybe<Scalars['String']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']>;
  citizenship_country?: Maybe<Country>;
  city?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_for?: Maybe<Companies>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  language?: Maybe<Languages>;
  last_name?: Maybe<Scalars['String']>;
  manager?: Maybe<Members>;
  middle_name?: Maybe<Scalars['String']>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  nationality?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  roles?: Maybe<Array<Maybe<Role>>>;
  sex?: Maybe<Sex>;
  state?: Maybe<Scalars['String']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company_id: Scalars['ID'];
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

export type ApplicantIndividualCompanyPaginator = {
  __typename?: 'ApplicantIndividualCompanyPaginator';
  data: Array<ApplicantIndividualCompany>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  data: Array<ApplicantIndividualCompanyPosition>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  data: Array<ApplicantIndividualCompanyRelation>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  data: Array<ApplicantIndividualLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantIndividualModulesPaginator = {
  __typename?: 'ApplicantIndividualModulesPaginator';
  data: Array<ApplicantIndividualModules>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  applicant?: Maybe<ApplicantIndividual>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note: Scalars['String'];
};

export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  data: Array<ApplicantIndividualNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  data: Array<ApplicantIndividual>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualRiskLevel = {
  __typename?: 'ApplicantIndividualRiskLevel';
  applicant?: Maybe<ApplicantIndividual>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type ApplicantIndividualRiskLevelPaginator = {
  __typename?: 'ApplicantIndividualRiskLevelPaginator';
  data: Array<ApplicantIndividualRiskLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  data: Array<ApplicantKycLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantModules = {
  __typename?: 'ApplicantModules';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantModulesPaginator = {
  __typename?: 'ApplicantModulesPaginator';
  data: Array<ApplicantModules>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  applicant_id?: Maybe<ApplicantIndividual>;
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  manager_id?: Maybe<Members>;
  risk_level_id?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  data: Array<ApplicantRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  data: Array<ApplicantRiskLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  data: Array<ApplicantState>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  data: Array<ApplicantStateReason>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  data: Array<ApplicantStatus>;
  paginatorInfo: PaginatorInfo;
};

export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  data: Array<BusinessActivity>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  account?: Maybe<Accounts>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_system?: Maybe<PaymentSystem>;
  provider?: Maybe<PaymentProvider>;
};

export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  data: Array<CommissionPriceList>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  account?: Maybe<Accounts>;
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_provider?: Maybe<PaymentProvider>;
};

export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  amount?: Maybe<Scalars['Float']>;
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_period_id?: Maybe<Scalars['ID']>;
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  commission_template_limit_type_id?: Maybe<Scalars['ID']>;
  currency?: Maybe<Currencies>;
  currency_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: Maybe<Scalars['Int']>;
};

export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  data: Array<CommissionTemplateLimitActionType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  data: Array<CommissionTemplateLimit>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  data: Array<CommissionTemplateLimitPeriod>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  data: Array<CommissionTemplateLimitTransferDirection>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  data: Array<CommissionTemplateLimitType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  data: Array<CommissionTemplate>;
  paginatorInfo: PaginatorInfo;
};

export type Companies = {
  __typename?: 'Companies';
  additional_fields?: Maybe<Scalars['JSON']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_number?: Maybe<Scalars['String']>;
  company_settings?: Maybe<CompanySettings>;
  contact_name?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  created_at: Scalars['DateTime'];
  departments?: Maybe<Array<Maybe<Departments>>>;
  email: Scalars['EMAIL'];
  id: Scalars['ID'];
  members?: Maybe<Array<Maybe<Members>>>;
  members_count?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type CompaniesPaginator = {
  __typename?: 'CompaniesPaginator';
  data: Array<Companies>;
  paginatorInfo: PaginatorInfo;
};

export type CompanySettings = {
  __typename?: 'CompanySettings';
  company?: Maybe<Companies>;
  company_id?: Maybe<Scalars['ID']>;
  email_from?: Maybe<Scalars['EMAIL']>;
  email_jwt?: Maybe<Scalars['String']>;
  email_url?: Maybe<Scalars['String']>;
  logo_object_key?: Maybe<Scalars['String']>;
  show_own_logo?: Maybe<Scalars['Boolean']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  iso: Scalars['String'];
  name: Scalars['String'];
};

export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  data: Array<Country>;
  paginatorInfo: PaginatorInfo;
};

export type Currencies = {
  __typename?: 'Currencies';
  code: Scalars['String'];
  id: Scalars['ID'];
  minor_unit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  data: Array<Currencies>;
  paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  from: Scalars['Date'];
  to: Scalars['DateEnd'];
};

export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  company?: Maybe<Companies>;
  department?: Maybe<Departments>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  data: Array<DepartmentPosition>;
  paginatorInfo: PaginatorInfo;
};

export type Departments = {
  __typename?: 'Departments';
  company?: Maybe<Companies>;
  id: Scalars['ID'];
  name: Scalars['String'];
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentsPaginator = {
  __typename?: 'DepartmentsPaginator';
  data: Array<Departments>;
  paginatorInfo: PaginatorInfo;
};

export type EmailNotification = {
  __typename?: 'EmailNotification';
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  data: Array<EmailNotification>;
  paginatorInfo: PaginatorInfo;
};

export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  from_email: Scalars['String'];
  from_name: Scalars['String'];
  host_name: Scalars['String'];
  id: Scalars['ID'];
  member?: Maybe<Members>;
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to: Scalars['String'];
  security: Securities;
  username: Scalars['String'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  company?: Maybe<Companies>;
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  footer: Scalars['String'];
  header: Scalars['String'];
  id: Scalars['ID'];
  service_type: Scalars['String'];
  subject: Scalars['String'];
  type: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  use_layout?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplatePaginator = {
  __typename?: 'EmailTemplatePaginator';
  data: Array<EmailTemplate>;
  paginatorInfo: PaginatorInfo;
};

export type Fee = {
  currency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee?: InputMaybe<Scalars['StringInteger']>;
  fee_from?: InputMaybe<Scalars['StringInteger']>;
  fee_to?: InputMaybe<Scalars['StringInteger']>;
  mode?: InputMaybe<FeeMode>;
};

export enum FeeMode {
  Fix = 'Fix',
  Percent = 'Percent',
  Range = 'Range'
}

export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FeesMode = {
  __typename?: 'FeesMode';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum FieldTypes {
  CountryList = 'CountryList',
  Text = 'Text',
  TextArea = 'TextArea'
}

export type Files = {
  __typename?: 'Files';
  author_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  entity_type: Scalars['String'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  mime_type: Scalars['String'];
  size: Scalars['Int'];
  storage_name: Scalars['String'];
  storage_path: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  data: Array<Files>;
  paginatorInfo: PaginatorInfo;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Companies>;
  description?: Maybe<Scalars['String']>;
  group_type?: Maybe<Groups>;
  group_type_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_provider?: Maybe<PaymentProvider>;
  role?: Maybe<Role>;
  role_id?: Maybe<Scalars['ID']>;
};

export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  data: Array<GroupRole>;
  paginatorInfo: PaginatorInfo;
};

export type Groups = {
  __typename?: 'Groups';
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  name: GroupsEntities;
};

export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type GroupsPaginator = {
  __typename?: 'GroupsPaginator';
  data: Array<Groups>;
  paginatorInfo: PaginatorInfo;
};

export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID'];
  iso: Scalars['String'];
  name: Scalars['String'];
};

export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  data: Array<Languages>;
  paginatorInfo: PaginatorInfo;
};

export type Members = {
  __typename?: 'Members';
  access_groups?: Maybe<Array<Maybe<GroupRole>>>;
  additional_fields?: Maybe<Scalars['JSON']>;
  additional_info_fields?: Maybe<Scalars['JSON']>;
  backup_codes?: Maybe<Scalars['JSON']>;
  company: Companies;
  company_id?: Maybe<Scalars['ID']>;
  country?: Maybe<Country>;
  department?: Maybe<Departments>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Languages>;
  last_login_at?: Maybe<Scalars['DateTime']>;
  last_name?: Maybe<Scalars['String']>;
  position?: Maybe<DepartmentPosition>;
  security_pin?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
  twofactor_secret?: Maybe<Scalars['String']>;
};

export enum MembersColumn {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  PositionId = 'POSITION_ID'
}

export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  data: Array<Members>;
  paginatorInfo: PaginatorInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  createAccount?: Maybe<Accounts>;
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  createApplicantCompany?: Maybe<ApplicantCompany>;
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  createApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  createApplicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  createApplicantModule?: Maybe<ApplicantModules>;
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  createBusinessActivity?: Maybe<BusinessActivity>;
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  createCompany?: Maybe<Companies>;
  createCompanySettings?: Maybe<CompanySettings>;
  createDepartment?: Maybe<Departments>;
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  createEmailNotification?: Maybe<EmailNotification>;
  createEmailSmtp?: Maybe<EmailSmtp>;
  createEmailTemplate?: Maybe<EmailTemplate>;
  createGroupSettings?: Maybe<GroupRole>;
  createMember?: Maybe<Members>;
  createPayment?: Maybe<Payments>;
  createPaymentProvider?: Maybe<PaymentProvider>;
  createPaymentSystem?: Maybe<PaymentSystem>;
  createPriceListFees?: Maybe<PriceListFee>;
  createRequisites?: Maybe<Requisites>;
  createRole?: Maybe<Role>;
  createTicket?: Maybe<Ticket>;
  createTicketComment?: Maybe<TicketComments>;
  deleteAccount?: Maybe<Accounts>;
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  deleteApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  deleteApplicantIndividualRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  deleteCompany?: Maybe<Companies>;
  deleteDepartment?: Maybe<Departments>;
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  deleteEmailNotification?: Maybe<EmailNotification>;
  deleteEmailSmtp?: Maybe<EmailSmtp>;
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  deleteFile?: Maybe<Files>;
  deleteGroup?: Maybe<GroupRole>;
  deleteMember?: Maybe<Members>;
  deletePayment?: Maybe<Payments>;
  deletePaymentProvider?: Maybe<PaymentProvider>;
  deletePaymentSystem?: Maybe<PaymentSystem>;
  deletePriceListFees?: Maybe<PriceListFee>;
  deleteRequisites?: Maybe<Requisites>;
  deleteRole?: Maybe<Role>;
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  generateIban?: Maybe<Accounts>;
  inviteMember?: Maybe<Members>;
  sendEmail?: Maybe<EmailSmtp>;
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  setMemberGroup?: Maybe<GroupRole>;
  setMemberPassword?: Maybe<Members>;
  setMemberSecurityPin?: Maybe<Members>;
  updateAccount?: Maybe<Accounts>;
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  updateBusinessActivity?: Maybe<BusinessActivity>;
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  updateCompany?: Maybe<Companies>;
  updateCompanySettings?: Maybe<CompanySettings>;
  updateDepartment?: Maybe<Departments>;
  updateEmailNotification?: Maybe<EmailNotification>;
  updateEmailSmtp?: Maybe<EmailSmtp>;
  updateEmailTemplate?: Maybe<EmailTemplate>;
  updateGroupSettings?: Maybe<GroupRole>;
  updateMember?: Maybe<Members>;
  updatePayment?: Maybe<Payments>;
  updatePaymentProvider?: Maybe<PaymentProvider>;
  updatePaymentSystem?: Maybe<PaymentSystem>;
  updatePriceListFees?: Maybe<PriceListFee>;
  updateRequisites?: Maybe<Requisites>;
  updateRole?: Maybe<Role>;
  updateTicket?: Maybe<Ticket>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateAccountArgs = {
  account_name: Scalars['String'];
  account_number: Scalars['String'];
  account_state: Scalars['String'];
  account_type: Scalars['String'];
  activated_at?: InputMaybe<Scalars['DateTime']>;
  available_balance?: InputMaybe<Scalars['Int']>;
  client_id: Scalars['ID'];
  client_type: Scalars['String'];
  commission_template_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  currency_id: Scalars['ID'];
  current_balance?: InputMaybe<Scalars['Int']>;
  is_primary: Scalars['Boolean'];
  owner_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  reserved_balance?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  can_create_payment: Scalars['Boolean'];
  can_sign_payment: Scalars['Boolean'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Float'];
  member_id: Scalars['ID'];
  monthly_limit: Scalars['Float'];
  operation_limit: Scalars['Float'];
  used_limit?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateApplicantCompanyArgs = {
  account_manager_member_id: Scalars['ID'];
  address: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id: Scalars['ID'];
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  city: Scalars['String'];
  company_id: Scalars['ID'];
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  expires_at: Scalars['Date'];
  group_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id: Scalars['ID'];
  owner_relation_id: Scalars['ID'];
  phone: Scalars['String'];
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantCompanyRiskLevelArgs = {
  applicant_company_id: Scalars['ID'];
  description: Scalars['String'];
  member_id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualArgs = {
  account_manager_member_id: Scalars['ID'];
  address: Scalars['String'];
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id: Scalars['ID'];
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  birth_at: Scalars['Date'];
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id: Scalars['ID'];
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city: Scalars['String'];
  company_id: Scalars['ID'];
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  middle_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone: Scalars['String'];
  role_id: Array<InputMaybe<Scalars['ID']>>;
  sex: Sex;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantIndividualRiskLevelArgs = {
  applicant_individual_id: Scalars['ID'];
  description: Scalars['String'];
  member_id: Scalars['ID'];
};


export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String'];
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payment_provider_id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateLimitArgs = {
  amount: Scalars['Float'];
  commission_template_limit_action_type_id: Scalars['ID'];
  commission_template_limit_period_id: Scalars['ID'];
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateCompanyArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCompanySettingsArgs = {
  company_id: Scalars['Int'];
  email_from?: InputMaybe<Scalars['EMAIL']>;
  email_jwt?: InputMaybe<Scalars['String']>;
  email_url?: InputMaybe<Scalars['String']>;
  show_own_logo?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID'];
  department_positions_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID'];
  department_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateEmailNotificationArgs = {
  company_id: Scalars['ID'];
  group_id?: InputMaybe<Scalars['ID']>;
  member_id?: InputMaybe<Scalars['ID']>;
  templates: Array<InputMaybe<Scalars['ID']>>;
  type: NotifyType;
};


export type MutationCreateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['Int'];
  content: Scalars['String'];
  footer: Scalars['String'];
  header: Scalars['String'];
  service_type: Scalars['String'];
  subject: Scalars['String'];
  type: Scalars['String'];
  use_layout: Scalars['Boolean'];
};


export type MutationCreateGroupSettingsArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Float'];
  amount_real?: InputMaybe<Scalars['Float']>;
  company_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  currency_id: Scalars['ID'];
  fee?: InputMaybe<Scalars['Float']>;
  fee_type_id: Scalars['Int'];
  payment_details: Scalars['String'];
  payment_number: Scalars['String'];
  payment_provider_id: Scalars['ID'];
  sender_address?: InputMaybe<Scalars['String']>;
  sender_bank_account: Scalars['String'];
  sender_bank_address?: InputMaybe<Scalars['String']>;
  sender_bank_country?: InputMaybe<Scalars['ID']>;
  sender_bank_name: Scalars['String'];
  sender_country?: InputMaybe<Scalars['ID']>;
  sender_name: Scalars['String'];
  sender_swift?: InputMaybe<Scalars['String']>;
  status_id: Scalars['ID'];
  type_id: Scalars['ID'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  urgency_id: Scalars['ID'];
};


export type MutationCreatePaymentProviderArgs = {
  country_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreatePaymentSystemArgs = {
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};


export type MutationCreatePriceListFeesArgs = {
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
  name?: InputMaybe<Scalars['String']>;
  operation_type_id?: InputMaybe<Scalars['Int']>;
  period_id?: InputMaybe<Scalars['Int']>;
  price_list_id: Scalars['Int'];
  type_id?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateRequisitesArgs = {
  account_id: Scalars['ID'];
  account_no: Scalars['String'];
  address: Scalars['String'];
  bank_address: Scalars['String'];
  bank_correspondent?: InputMaybe<Scalars['JSON']>;
  bank_country_id: Scalars['ID'];
  bank_name: Scalars['String'];
  country_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  iban: Scalars['String'];
  recipient: Scalars['String'];
  registration_number: Scalars['Int'];
  swift: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID'];
  company_id: Scalars['ID'];
  message: Scalars['String'];
  status?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID'];
  message: Scalars['String'];
  ticket_id: Scalars['ID'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualRiskLevelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRequisitesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID'];
};


export type MutationInviteMemberArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  last_name: Scalars['String'];
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationSendEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberGroupArgs = {
  commission_template_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  role_id: Scalars['ID'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  account_name: Scalars['String'];
  account_state: Scalars['String'];
  account_type: Scalars['String'];
  activated_at?: InputMaybe<Scalars['DateTime']>;
  available_balance?: InputMaybe<Scalars['Int']>;
  client_id: Scalars['ID'];
  client_type: Scalars['String'];
  commission_template_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  currency_id: Scalars['ID'];
  current_balance?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_primary: Scalars['Boolean'];
  owner_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  reserved_balance?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  can_create_payment: Scalars['Boolean'];
  can_sign_payment: Scalars['Boolean'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Float'];
  id: Scalars['ID'];
  member_id: Scalars['ID'];
  monthly_limit: Scalars['Float'];
  operation_limit: Scalars['Float'];
  used_limit?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  expires_at?: InputMaybe<Scalars['Date']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  birth_at?: InputMaybe<Scalars['Date']>;
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id?: InputMaybe<Scalars['ID']>;
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  role_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_id: Scalars['ID'];
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
};


export type MutationUpdateCommissionTemplateArgs = {
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  amount?: InputMaybe<Scalars['Float']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateCompanyArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCompanySettingsArgs = {
  company_id: Scalars['ID'];
  email_from?: InputMaybe<Scalars['EMAIL']>;
  email_jwt?: InputMaybe<Scalars['String']>;
  email_url?: InputMaybe<Scalars['String']>;
  show_own_logo?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateDepartmentArgs = {
  active_department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
};


export type MutationUpdateEmailNotificationArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  member_id?: InputMaybe<Scalars['ID']>;
  templates?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<NotifyType>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationUpdateEmailTemplateArgs = {
  company_id: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  service_type?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  use_layout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateGroupSettingsArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']>;
  country_id?: InputMaybe<Scalars['ID']>;
  department_position?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePaymentArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Float']>;
  company_id?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Scalars['ID']>;
  fee?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  payment_details?: InputMaybe<Scalars['String']>;
  payment_number?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_bank_account?: InputMaybe<Scalars['String']>;
  sender_bank_address?: InputMaybe<Scalars['String']>;
  sender_bank_country?: InputMaybe<Scalars['ID']>;
  sender_bank_name?: InputMaybe<Scalars['String']>;
  sender_country?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  sender_swift?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type_id: Scalars['ID'];
  urgency_id: Scalars['ID'];
};


export type MutationUpdatePaymentProviderArgs = {
  country_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePriceListFeesArgs = {
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  operation_type_id?: InputMaybe<Scalars['Int']>;
  period_id?: InputMaybe<Scalars['Int']>;
  type_id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateRequisitesArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  account_no?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  bank_address?: InputMaybe<Scalars['String']>;
  bank_correspondent?: InputMaybe<Scalars['JSON']>;
  bank_country_id?: InputMaybe<Scalars['ID']>;
  bank_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  iban?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  recipient?: InputMaybe<Scalars['String']>;
  registration_number?: InputMaybe<Scalars['Int']>;
  swift?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID'];
  status: Scalars['Int'];
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type OrderByClause = {
  column: Scalars['String'];
  order: SortOrder;
};

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  startCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  countries?: Maybe<Array<Maybe<Country>>>;
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  logo_key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  data: Array<PaymentProvider>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  data: Array<PaymentSystem>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentTypes = {
  __typename?: 'PaymentTypes';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Payments = {
  __typename?: 'Payments';
  account?: Maybe<Accounts>;
  amount: Scalars['Float'];
  amount_real: Scalars['Float'];
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_details?: Maybe<Scalars['String']>;
  payment_number?: Maybe<Scalars['String']>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_type?: Maybe<PaymentTypes>;
  payment_urgency?: Maybe<PaymentUrgency>;
  received_at?: Maybe<Scalars['DateTime']>;
  sender_additional_fields?: Maybe<Scalars['JSON']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_bank_account?: Maybe<Scalars['String']>;
  sender_bank_address?: Maybe<Scalars['String']>;
  sender_bank_country?: Maybe<Country>;
  sender_bank_name?: Maybe<Scalars['String']>;
  sender_country?: Maybe<Country>;
  sender_name?: Maybe<Scalars['String']>;
  sender_swift?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  data: Array<Payments>;
  paginatorInfo: PaginatorInfo;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']>;
  permission_category_id?: Maybe<Scalars['ID']>;
  role_id?: Maybe<Scalars['ID']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']>;
  display_name?: Maybe<Scalars['String']>;
  guard_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PriceListFee = {
  __typename?: 'PriceListFee';
  created_at?: Maybe<Scalars['DateTime']>;
  fee_type?: Maybe<FeeType>;
  fees_item?: Maybe<Array<Maybe<PriceListFeesItem>>>;
  id: Scalars['ID'];
  list?: Maybe<CommissionPriceList>;
  name: Scalars['String'];
  operation_type?: Maybe<OperationType>;
  period?: Maybe<FeePeriod>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PriceListFeesItem = {
  __typename?: 'PriceListFeesItem';
  fee_item?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Accounts>;
  accounts?: Maybe<AccountsPaginator>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccessPaginator>;
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  applicantCompany?: Maybe<ApplicantCompany>;
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  applicantCompanyModules?: Maybe<ApplicantCompanyModulesPaginator>;
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  applicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  applicantCompanyRiskLevels?: Maybe<ApplicantCompanyRiskLevelPaginator>;
  applicantIndividual?: Maybe<ApplicantIndividual>;
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  applicantIndividualModules?: Maybe<ApplicantIndividualModulesPaginator>;
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  applicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  applicantIndividualRiskLevels?: Maybe<ApplicantIndividualRiskLevelPaginator>;
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  applicantState?: Maybe<ApplicantState>;
  applicantStateReason?: Maybe<ApplicantStateReason>;
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  applicantStates?: Maybe<ApplicantStatePaginator>;
  applicantStatus?: Maybe<ApplicantStatus>;
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  businessActivities?: Maybe<BusinessActivityPaginator>;
  businessActivity?: Maybe<BusinessActivity>;
  commissionPriceList?: Maybe<CommissionPriceList>;
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  commissionTemplate?: Maybe<CommissionTemplate>;
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  companies?: Maybe<CompaniesPaginator>;
  company?: Maybe<Companies>;
  companySettings?: Maybe<CompanySettings>;
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  currencies?: Maybe<CurrenciesPaginator>;
  currency?: Maybe<Currencies>;
  department?: Maybe<Departments>;
  departmentPosition?: Maybe<DepartmentPosition>;
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  departments?: Maybe<DepartmentsPaginator>;
  emailNotification?: Maybe<EmailNotification>;
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  emailSmtp?: Maybe<EmailSmtp>;
  emailTemplate?: Maybe<EmailTemplate>;
  emailTemplates?: Maybe<EmailTemplatePaginator>;
  feePeriods: Array<FeePeriod>;
  feeTypes: Array<FeeType>;
  feesModes: Array<FeesMode>;
  file?: Maybe<Files>;
  files?: Maybe<FilesPaginator>;
  getMatchedUsers?: Maybe<ApplicantIndividualCompanyPaginator>;
  getPaymentTypes: Array<PaymentTypes>;
  getPaymentUrgencys: Array<PaymentUrgency>;
  getTicketComments: Array<TicketComments>;
  group_type?: Maybe<Groups>;
  group_types?: Maybe<GroupsPaginator>;
  groups?: Maybe<GroupRolePaginator>;
  language?: Maybe<Languages>;
  languages?: Maybe<LanguagesPaginator>;
  member?: Maybe<Members>;
  members?: Maybe<MembersPaginator>;
  operationTypes: Array<OperationType>;
  payment?: Maybe<Payments>;
  paymentProvider?: Maybe<PaymentProvider>;
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  paymentStatuses: Array<PaymentStatus>;
  paymentSystem?: Maybe<PaymentSystem>;
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  payments?: Maybe<PaymentsPaginator>;
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions_tree?: Maybe<Permissions>;
  priceListFees: Array<PriceListFee>;
  requisite?: Maybe<Requisites>;
  requisites?: Maybe<RequisitesPaginator>;
  role?: Maybe<Role>;
  roles?: Maybe<RolePaginator>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  ticket?: Maybe<Ticket>;
  ticketComment?: Maybe<TicketComments>;
  tickets?: Maybe<TicketPaginator>;
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasGroup?: InputMaybe<QueryAccountsHasGroupWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryAccountsWhereWhereConditions>;
};


export type QueryApplicantBankingAccessArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantCompanyRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasGroupRole?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};


export type QueryBusinessActivitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
  hasCommissionTemplate?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  hasPaymentSystem?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
  hasBusinessActivity?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCompaniesWhereWhereConditions>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanySettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasDepartment?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
};


export type QueryDepartmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCompany?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
};


export type QueryEmailNotificationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasCompany?: InputMaybe<QueryEmailNotificationsHasCompanyWhereHasConditions>;
  hasGroup?: InputMaybe<QueryEmailNotificationsHasGroupWhereHasConditions>;
  hasMember?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
  hasTemplates?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
};


export type QueryEmailSmtpArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasCompany?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryFilesWhereWhereConditions>;
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGetMatchedUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCommissionTemplate?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
  hasGroupType?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
  hasRole?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGroupsWhereWhereConditions>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMembersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasDepartment?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryMembersWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  where?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProvidersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasPaymentSystems?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderCountry?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  paymentProviderCurrency?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  where?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentSystemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasAccounts?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
  hasCompanies?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
  hasOwner?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
  hasPaymentStatus?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
  hasPaymentTypes?: InputMaybe<QueryPaymentsHasPaymentTypesWhereHasConditions>;
  hasPaymentUrgency?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPaymentsWhereWhereConditions>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  hasList?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
  price_list_id?: InputMaybe<Scalars['ID']>;
  where?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRequisitesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryRequisitesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryRequisitesWhereWhereConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  groups_sort?: InputMaybe<Sort>;
  hasGroupTypes?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
  hasGroups?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryRolesWhereWhereConditions>;
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasClient?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  hasCompany?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  hasDepartment?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  hasMember?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  hasPosition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryTicketsWhereWhereConditions>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryUsersWhereWhereConditions>;
};

export enum QueryAccountsHasGroupColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountsHasGroupWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountsHasGroupWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountsHasGroupWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountsHasGroupWhereHasConditions>>;
  column?: InputMaybe<QueryAccountsHasGroupColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountsHasGroupWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountsHasGroupWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountsOrderByColumn {
  ClientId = 'CLIENT_ID',
  Id = 'ID'
}

export type QueryAccountsOrderByOrderByClause = {
  column: QueryAccountsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountsWhereColumn {
  AccountName = 'ACCOUNT_NAME',
  AccountNumber = 'ACCOUNT_NUMBER',
  ClientId = 'CLIENT_ID',
  CurrencyId = 'CURRENCY_ID',
  OwnerId = 'OWNER_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID'
}

export type QueryAccountsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryAccountsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountsWhereWhereConditions>>;
  column?: InputMaybe<QueryAccountsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessOrderByOrderByClause = {
  column: QueryApplicantBankingAccessOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantBankingAccessWhereColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantBankingAccessWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantBankingAccessWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

export type QueryApplicantCompaniesOrderByOrderByClause = {
  column: QueryApplicantCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryApplicantCompaniesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyModulesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID'
}

export type QueryApplicantCompanyModulesOrderByOrderByClause = {
  column: QueryApplicantCompanyModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyModulesWhereColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID'
}

export type QueryApplicantCompanyModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  column: QueryApplicantCompanyNotesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyRiskLevelsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantCompanyRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyPositionsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyRelationsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualModulesOrderByColumn {
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID'
}

export type QueryApplicantIndividualModulesOrderByOrderByClause = {
  column: QueryApplicantIndividualModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualModulesWhereColumn {
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID'
}

export type QueryApplicantIndividualModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  column: QueryApplicantIndividualNotesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualRiskLevelsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantIndividualRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantIndividualRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualsHasGroupRoleColumn {
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

export type QueryApplicantIndividualsHasGroupRoleWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualsHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualsHasRiskLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualsHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualsHasStateReasonWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualsHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualsHasStatusWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualsHasStatusWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

export type QueryApplicantIndividualsOrderByOrderByClause = {
  column: QueryApplicantIndividualsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualsWhereColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

export type QueryApplicantIndividualsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantKycLevelsOrderByOrderByClause = {
  column: QueryApplicantKycLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantKycLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantModulesOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantModulesOrderByOrderByClause = {
  column: QueryApplicantModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantModulesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelHistoryWhereColumn {
  ApplicantId = 'APPLICANT_ID'
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStateReasonsOrderByOrderByClause = {
  column: QueryApplicantStateReasonsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStateReasonsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatesOrderByOrderByClause = {
  column: QueryApplicantStatesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStatesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatusesOrderByOrderByClause = {
  column: QueryApplicantStatusesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatusesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryBusinessActivitiesOrderByOrderByClause = {
  column: QueryBusinessActivitiesOrderByColumn;
  order: SortOrder;
};

export enum QueryBusinessActivitiesWhereColumn {
  Name = 'NAME'
}

export type QueryBusinessActivitiesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryBusinessActivitiesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  column?: InputMaybe<QueryBusinessActivitiesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryBusinessActivitiesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasAccountColumn {
  AccountNumber = 'ACCOUNT_NUMBER'
}

export type QueryCommissionPriceListsHasAccountWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasAccountWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasAccountWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasCommissionTemplateColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasCompanyColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasOwnerColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsHasPaymentSystemColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsOrderByOrderByClause = {
  column: QueryCommissionPriceListsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionPriceListsWhereColumn {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  Name = 'NAME',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  ProviderId = 'PROVIDER_ID'
}

export type QueryCommissionPriceListsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionPriceListsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionPriceListsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitActionTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypeOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitActionTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypeWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypeWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesHasAccountColumn {
  AccountName = 'ACCOUNT_NAME'
}

export type QueryCommissionTemplatesHasAccountWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesHasAccountWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesHasBusinessActivityColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesHasCompanyColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplatesHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesHasOwnerColumn {
  Fullname = 'FULLNAME'
}

export type QueryCommissionTemplatesHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesOrderByOrderByClause = {
  column: QueryCommissionTemplatesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplatesWhereColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplatesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplatesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryCompaniesOrderByOrderByClause = {
  column: QueryCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryCompaniesWhereColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryCompaniesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCompaniesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  column?: InputMaybe<QueryCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCompaniesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCompaniesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryDepartmentPositionsHasDepartmentColumn {
  Id = 'ID'
}

export type QueryDepartmentPositionsHasDepartmentWhereHasConditions = {
  AND?: InputMaybe<Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>>;
  column?: InputMaybe<QueryDepartmentPositionsHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsOrderByOrderByClause = {
  column: QueryDepartmentPositionsOrderByColumn;
  order: SortOrder;
};

export enum QueryDepartmentPositionsWhereColumn {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryDepartmentPositionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  column?: InputMaybe<QueryDepartmentPositionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryDepartmentPositionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryDepartmentsHasCompanyColumn {
  Id = 'ID'
}

export type QueryDepartmentsHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryDepartmentsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryDepartmentsHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryDepartmentsOrderByOrderByClause = {
  column: QueryDepartmentsOrderByColumn;
  order: SortOrder;
};

export enum QueryDepartmentsWhereColumn {
  Name = 'NAME'
}

export type QueryDepartmentsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryDepartmentsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  column?: InputMaybe<QueryDepartmentsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryDepartmentsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailNotificationsHasCompanyColumn {
  Name = 'NAME'
}

export type QueryEmailNotificationsHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryEmailNotificationsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailNotificationsHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailNotificationsHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailNotificationsHasGroupColumn {
  Name = 'NAME'
}

export type QueryEmailNotificationsHasGroupWhereHasConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsHasGroupWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasGroupWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasGroupWhereHasConditions>>;
  column?: InputMaybe<QueryEmailNotificationsHasGroupColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailNotificationsHasGroupWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailNotificationsHasGroupWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailNotificationsHasMemberColumn {
  Fullname = 'FULLNAME'
}

export type QueryEmailNotificationsHasMemberWhereHasConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  column?: InputMaybe<QueryEmailNotificationsHasMemberColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailNotificationsHasMemberWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailNotificationsHasTemplatesColumn {
  Subject = 'SUBJECT'
}

export type QueryEmailNotificationsHasTemplatesWhereHasConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>>;
  column?: InputMaybe<QueryEmailNotificationsHasTemplatesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

export type QueryEmailNotificationsOrderByOrderByClause = {
  column: QueryEmailNotificationsOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailNotificationsWhereColumn {
  Type = 'TYPE'
}

export type QueryEmailNotificationsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryEmailNotificationsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  column?: InputMaybe<QueryEmailNotificationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailNotificationsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailTemplatesHasCompanyColumn {
  Name = 'NAME'
}

export type QueryEmailTemplatesHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryEmailTemplatesHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailTemplatesHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

export type QueryEmailTemplatesOrderByOrderByClause = {
  column: QueryEmailTemplatesOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailTemplatesWhereColumn {
  Subject = 'SUBJECT'
}

export type QueryEmailTemplatesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryEmailTemplatesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  column?: InputMaybe<QueryEmailTemplatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryEmailTemplatesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

export type QueryFilesOrderByOrderByClause = {
  column: QueryFilesOrderByColumn;
  order: SortOrder;
};

export enum QueryFilesWhereColumn {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

export type QueryFilesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryFilesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  column?: InputMaybe<QueryFilesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryFilesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryFilesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryGetMatchedUsersOrderByColumn {
  Id = 'ID'
}

export type QueryGetMatchedUsersOrderByOrderByClause = {
  column: QueryGetMatchedUsersOrderByColumn;
  order: SortOrder;
};

export enum QueryGroupsHasCommissionTemplateColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryGroupsHasCommissionTemplateWhereHasConditions = {
  AND?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  column?: InputMaybe<QueryGroupsHasCommissionTemplateColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryGroupsHasCommissionTemplateWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryGroupsHasGroupTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryGroupsHasGroupTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  column?: InputMaybe<QueryGroupsHasGroupTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryGroupsHasGroupTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryGroupsHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryGroupsHasPaymentProviderWhereHasConditions = {
  AND?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  column?: InputMaybe<QueryGroupsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryGroupsHasPaymentProviderWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryGroupsHasRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryGroupsHasRoleWhereHasConditions = {
  AND?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryGroupsHasRoleWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  column?: InputMaybe<QueryGroupsHasRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryGroupsHasRoleWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryGroupsOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE'
}

export type QueryGroupsOrderByOrderByClause = {
  column: QueryGroupsOrderByColumn;
  order: SortOrder;
};

export enum QueryGroupsWhereColumn {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID'
}

export type QueryGroupsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryGroupsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  column?: InputMaybe<QueryGroupsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryGroupsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryGroupsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryMembersHasDepartmentColumn {
  DepartmentId = 'DEPARTMENT_ID'
}

export type QueryMembersHasDepartmentWhereHasConditions = {
  AND?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryMembersHasDepartmentWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  column?: InputMaybe<QueryMembersHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryMembersHasDepartmentWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryMembersHasGroupRoleColumn {
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

export type QueryMembersHasGroupRoleWhereHasConditions = {
  AND?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  column?: InputMaybe<QueryMembersHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryMembersHasGroupRoleWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

export type QueryMembersOrderByOrderByClause = {
  column: QueryMembersOrderByColumn;
  order: SortOrder;
};

export type QueryMembersWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryMembersWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  column?: InputMaybe<MembersColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryMembersWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryMembersWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryOperationTypesWhereColumn {
  FeeTypeId = 'FEE_TYPE_ID'
}

export type QueryOperationTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryOperationTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryOperationTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryOperationTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentProvidersHasPaymentSystemsColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentProvidersOrderByOrderByClause = {
  column: QueryPaymentProvidersOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentProvidersWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPaymentProvidersWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentProvidersWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  column?: InputMaybe<QueryPaymentProvidersWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentProvidersWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentSystemsOrderByOrderByClause = {
  column: QueryPaymentSystemsOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentSystemsWhereColumn {
  Name = 'NAME'
}

export type QueryPaymentSystemsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentSystemsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  column?: InputMaybe<QueryPaymentSystemsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentSystemsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasAccountsColumn {
  AccountId = 'ACCOUNT_ID'
}

export type QueryPaymentsHasAccountsWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasAccountsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasAccountsWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasCompaniesColumn {
  Name = 'NAME'
}

export type QueryPaymentsHasCompaniesWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasCompaniesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasCompaniesWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasOwnerColumn {
  Fullname = 'FULLNAME'
}

export type QueryPaymentsHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasPaymentProviderColumn {
  Name = 'NAME'
}

export type QueryPaymentsHasPaymentProviderWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasPaymentProviderColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasPaymentProviderWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasPaymentStatusColumn {
  Name = 'NAME'
}

export type QueryPaymentsHasPaymentStatusWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasPaymentStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasPaymentStatusWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasPaymentTypesColumn {
  Name = 'NAME'
}

export type QueryPaymentsHasPaymentTypesWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentTypesWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentTypesWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentTypesWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasPaymentTypesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasPaymentTypesWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasPaymentTypesWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsHasPaymentUrgencyColumn {
  Name = 'NAME'
}

export type QueryPaymentsHasPaymentUrgencyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  HAS?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  column?: InputMaybe<QueryPaymentsHasPaymentUrgencyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

export type QueryPaymentsOrderByOrderByClause = {
  column: QueryPaymentsOrderByColumn;
  order: SortOrder;
};

export enum QueryPaymentsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  CompanyId = 'COMPANY_ID',
  PaymentNumber = 'PAYMENT_NUMBER',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderBankAccount = 'SENDER_BANK_ACCOUNT',
  SenderName = 'SENDER_NAME',
  Status = 'STATUS',
  TypeId = 'TYPE_ID',
  UrgencyId = 'URGENCY_ID'
}

export type QueryPaymentsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPaymentsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  column?: InputMaybe<QueryPaymentsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPaymentsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPaymentsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPermissionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPermissionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPriceListFeesHasListColumn {
  Name = 'NAME'
}

export type QueryPriceListFeesHasListWhereHasConditions = {
  AND?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  HAS?: InputMaybe<QueryPriceListFeesHasListWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  column?: InputMaybe<QueryPriceListFeesHasListColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPriceListFeesHasListWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryPriceListFeesWhereColumn {
  Name = 'NAME',
  OperationType = 'OPERATION_TYPE',
  Period = 'PERIOD',
  Type = 'TYPE'
}

export type QueryPriceListFeesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPriceListFeesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  column?: InputMaybe<QueryPriceListFeesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPriceListFeesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryRequisitesOrderByColumn {
  Id = 'ID'
}

export type QueryRequisitesOrderByOrderByClause = {
  column: QueryRequisitesOrderByColumn;
  order: SortOrder;
};

export enum QueryRequisitesWhereColumn {
  AccountId = 'ACCOUNT_ID',
  AccountNo = 'ACCOUNT_NO',
  BankName = 'BANK_NAME'
}

export type QueryRequisitesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryRequisitesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  column?: InputMaybe<QueryRequisitesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryRequisitesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryRequisitesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryRolesHasGroupTypesColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryRolesHasGroupTypesWhereHasConditions = {
  AND?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  HAS?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  column?: InputMaybe<QueryRolesHasGroupTypesColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryRolesHasGroupTypesWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryRolesHasGroupsColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryRolesHasGroupsWhereHasConditions = {
  AND?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  HAS?: InputMaybe<QueryRolesHasGroupsWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  column?: InputMaybe<QueryRolesHasGroupsColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryRolesHasGroupsWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryRolesOrderByOrderByClause = {
  column: QueryRolesOrderByColumn;
  order: SortOrder;
};

export enum QueryRolesWhereColumn {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Name = 'NAME'
}

export type QueryRolesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryRolesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  column?: InputMaybe<QueryRolesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryRolesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryRolesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasClientColumn {
  Fullname = 'FULLNAME'
}

export type QueryTicketsHasClientWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasClientWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasClientColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasClientWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasCompanyColumn {
  Name = 'NAME'
}

export type QueryTicketsHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasDepartmentColumn {
  Name = 'NAME'
}

export type QueryTicketsHasDepartmentWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasDepartmentWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasMemberColumn {
  Fullname = 'FULLNAME'
}

export type QueryTicketsHasMemberWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasMemberWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasMemberColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasMemberWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasPositionColumn {
  Name = 'NAME'
}

export type QueryTicketsHasPositionWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasPositionWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasPositionColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasPositionWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

export type QueryTicketsOrderByCompany = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByDepartment = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByRelationOrderByClause = {
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  order: SortOrder;
};

export enum QueryTicketsWhereColumn {
  Status = 'STATUS',
  Title = 'TITLE'
}

export type QueryTicketsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryTicketsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  column?: InputMaybe<QueryTicketsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryUsersOrderByOrderByClause = {
  column: QueryUsersOrderByColumn;
  order: SortOrder;
};

export type QueryUsersWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  HAS?: InputMaybe<QueryUsersWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  column?: InputMaybe<UsersColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryUsersWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryUsersWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type Requisites = {
  __typename?: 'Requisites';
  account_id?: Maybe<Accounts>;
  account_no: Scalars['String'];
  address: Scalars['String'];
  bank_address: Scalars['String'];
  bank_correspondent?: Maybe<Scalars['JSON']>;
  bank_country_id?: Maybe<Country>;
  bank_name: Scalars['String'];
  country_id?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTime']>;
  iban: Scalars['String'];
  id: Scalars['ID'];
  recipient: Scalars['String'];
  registration_number: Scalars['Int'];
  swift: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type RequisitesPaginator = {
  __typename?: 'RequisitesPaginator';
  data: Array<Requisites>;
  paginatorInfo: PaginatorInfo;
};

export type Role = {
  __typename?: 'Role';
  company?: Maybe<Companies>;
  description?: Maybe<Scalars['String']>;
  group_type?: Maybe<Groups>;
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  groups_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_all_companies?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  permissions_tree?: Maybe<Scalars['JSON']>;
};

export type RolePaginator = {
  __typename?: 'RolePaginator';
  data: Array<Role>;
  paginatorInfo: PaginatorInfo;
};

export enum SqlOperator {
  Between = 'BETWEEN',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  Lt = 'LT',
  Lte = 'LTE',
  Neq = 'NEQ',
  NotBetween = 'NOT_BETWEEN',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  sender_name: Scalars['String'];
};

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Ticket = {
  __typename?: 'Ticket';
  client?: Maybe<ApplicantIndividual>;
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  department?: Maybe<Departments>;
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  message: Scalars['String'];
  position?: Maybe<DepartmentPosition>;
  status: Scalars['Int'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type TicketComments = {
  __typename?: 'TicketComments';
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTime']>;
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  message: Scalars['String'];
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  data: Array<Ticket>;
  paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  data: Array<TwoFactorAuthSettings>;
  paginatorInfo: PaginatorInfo;
};

export type Users = {
  __typename?: 'Users';
  company?: Maybe<Companies>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
};

export enum UsersColumn {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  data: Array<Users>;
  paginatorInfo: PaginatorInfo;
};

export type WhereConditions = {
  AND?: InputMaybe<Array<WhereConditions>>;
  HAS?: InputMaybe<WhereConditionsRelation>;
  OR?: InputMaybe<Array<WhereConditions>>;
  column?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type WhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<WhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};
