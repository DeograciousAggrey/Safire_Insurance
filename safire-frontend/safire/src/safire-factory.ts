import { InsuranceCreated as InsuranceCreatedEvent } from "../generated/SafireFactory/SafireFactory"
import { InsuranceCreated } from "../generated/schema"

export function handleInsuranceCreated(event: InsuranceCreatedEvent): void {
  let entity = new InsuranceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.target = event.params.target
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
