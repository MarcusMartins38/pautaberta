export interface LawSuitServiceProps {
  id: number
  process_number: number
  distribution: string
  customer_situation: string
  created_at: string
  updated_at: string
  client: LawSuitAttributesGeneric
  label: {
    key: string
    name: string
  }
}

export interface LawSuitServiceCreateProps {
  clientId: number
  processNumber: number
  distribution: string
  customerSituation: 'AUTOR' | 'RÉU' | 'TERCEIRO'
  jurisdiction: LawSuitAttributesGeneric
  folder: LawSuitAttributesGeneric
  judicialDistrict: LawSuitAttributesGeneric
  jurisdictionDegree: LawSuitAttributesGeneric
  juridicalArea: LawSuitAttributesGeneric
  procedure: LawSuitAttributesGeneric
  processingStick: LawSuitAttributesGeneric
  processingPlace: LawSuitAttributesGeneric
}

export interface LawSuitServiceGetProps {
  id: number
  process_number: string
  customer_situation: string
  distribution: string
  created_at: string
  updated_at: string
  judicialDistrict: LawSuitAttributesGeneric
  folder: LawSuitAttributesGeneric
  client: LawSUitAttributesGenericClient
  partAgainst: LawSUitAttributesGenericClient
  lawyerAgainst: LawSUitAttributesGenericClient
  jurisdiction: LawSuitAttributesGeneric
  jurisdictionDegree: LawSuitAttributesGeneric
  juridicalArea: LawSuitAttributesGeneric
  procedure: LawSuitAttributesGeneric
  processingStick: LawSuitAttributesGeneric
  processingPlace: LawSuitAttributesGeneric
  cause_value: string
}

export interface LawSuitAttributesProps {
  folder: LawSuitAttributesGeneric[]
  judicialDistrict: LawSuitAttributesGeneric[]
  client: LawSuitAttributesGeneric[]
  partAgainst: LawSuitAttributesGeneric[]
  lawyerAgainst: LawSuitAttributesGeneric[]
  jurisdiction: LawSuitAttributesGeneric[]
  jurisdictionDegree: LawSuitAttributesGeneric[]
  juridicalArea: LawSuitAttributesGeneric[]
  procedure: LawSuitAttributesGeneric[]
  processingStick: LawSuitAttributesGeneric[]
  processingPlace: LawSuitAttributesGeneric[]
}

export interface LawSuitAttributesGeneric {
  id?: number
  name?: string
}

export interface LawSUitAttributesGenericClient {
  id: number
  userId: number
  name: string
  type: string
  createdAt: string
  updatedAt: string
  UserId: number
  user_id: number
}
