import { HStack } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const DashboardProductsSkeleton = () => {
  return (
    <Table.Root size="sm" interactive showColumnBorder>
      <Table.Header>
        <Table.Row bg="gray.200" _dark={{ bg: "#0e2323" }}>
          <Table.ColumnHeader fontWeight="bold">Title</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Description</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Price</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Discount</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Thumbnail</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Images</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Stock</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Rating</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Category</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight="bold">Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body fontSize="xs">
        {Array.from({ length: 12 }).map((_, rowIndex) => (
          <Table.Row
            key={rowIndex}
            _dark={{ bg: "#0a1a1b", _hover: { bg: "#0e1e1e" } }}
          >
            {/* Title */}
            <Table.Cell minW={"150px"} w="180px">
              <SkeletonText noOfLines={1} />
            </Table.Cell>
            {/* Description */}
            <Table.Cell minW={"200px"} w="240px">
              <SkeletonText noOfLines={1} />
            </Table.Cell>
            {/* Price */}
            <Table.Cell>
              <Skeleton height="15px" width="50px" />
            </Table.Cell>
            {/* Discount */}
            <Table.Cell>
              <Skeleton height="15px" width="50px" />
            </Table.Cell>
            {/* Thumbnail */}
            <Table.Cell>
              <Skeleton boxSize="30px" borderRadius="full" />
            </Table.Cell>
            {/* Images */}
            <Table.Cell minW="150px">
              <HStack wrap="wrap">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} boxSize="30px" borderRadius="full" />
                ))}
              </HStack>
            </Table.Cell>
            {/* Stock */}
            <Table.Cell>
              <Skeleton height="15px" width="50px"/>
            </Table.Cell>
            {/* Rating */}
            <Table.Cell>
              <Skeleton height="15px" width="50px" />
            </Table.Cell>
            {/* Category */}
            <Table.Cell>
              <SkeletonText noOfLines={1} />
            </Table.Cell>
            {/* Actions */}
            <Table.Cell>
              <HStack>
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Skeleton key={idx} height="30px" width="30px" />
                ))}
              </HStack>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DashboardProductsSkeleton;
