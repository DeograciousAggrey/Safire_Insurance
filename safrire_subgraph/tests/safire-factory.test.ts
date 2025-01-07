import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { InsuranceCreated } from "../generated/schema"
import { InsuranceCreated as InsuranceCreatedEvent } from "../generated/SafireFactory/SafireFactory"
import { handleInsuranceCreated } from "../src/safire-factory"
import { createInsuranceCreatedEvent } from "./safire-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let target = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let newInsuranceCreatedEvent = createInsuranceCreatedEvent(
      creator,
      target,
      asset
    )
    handleInsuranceCreated(newInsuranceCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("InsuranceCreated created and stored", () => {
    assert.entityCount("InsuranceCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "InsuranceCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "InsuranceCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "target",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "InsuranceCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asset",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
