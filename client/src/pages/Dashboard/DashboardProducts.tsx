import { HStack, Image, Table } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MdEdit, MdVisibility } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import ToolTipDetails from "../../components/ToolTipDetails";
import DashboardProductsSkeleton from "../../components/Dashboard/DashboardProductsSkeleton";

const items = [
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
  {
    documentId: "wpc3q1fnwrjorcffhokinh4f",
    title: "Annibale Colombo Bed Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Electronics",
    price: 999.99,
    rating: 3,
    stock: 2,
    discountPercentage: 0,
    thumbnail:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    images: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    ],
  },
];

const DashboardProductsPage = () => {
  return <DashboardProductsSkeleton />;
  return (
    <Table.Root size="sm" interactive showColumnBorder>
      <Table.Header>
        <Table.Row
          bg={"gray.200"}
          _dark={{ bg: "#0e2323" }}
        >
          <Table.ColumnHeader fontWeight={"bold"}>Title</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>
            Description
          </Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Price</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Discount</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Thumbnail</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Images</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Stock</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>rating</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Category</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={"bold"}>Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body fontSize={"xs"}>
        {items.map(
          ({
            category,
            description,
            discountPercentage,
            documentId,
            images,
            price,
            rating,
            stock,
            thumbnail,
            title,
          }) => (
            <Table.Row
              key={documentId}
              _dark={{ bg: "#0a1a1b", _hover: { bg: "#0e1e1e" } }}
            >
              <ToolTipDetails content={title}>
                <Table.Cell
                  maxW={"150px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {title}
                </Table.Cell>
              </ToolTipDetails>

              <ToolTipDetails content={description}>
                <Table.Cell
                  maxW={"200px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {description}
                </Table.Cell>
              </ToolTipDetails>

              <Table.Cell>{price}</Table.Cell>
              <Table.Cell>{discountPercentage}</Table.Cell>
              <Table.Cell>
                <Image
                  src={thumbnail}
                  alt="Product Thumbnail"
                  boxSize="30px"
                  borderRadius="full"
                />
              </Table.Cell>
              <Table.Cell minW={"150px"}>
                <HStack wrap={"wrap"}>
                  {images.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image}
                      alt="Product Image"
                      boxSize="30px"
                      borderRadius="full"
                    />
                  ))}
                </HStack>
              </Table.Cell>
              <Table.Cell>{stock}</Table.Cell>
              <Table.Cell>{rating}</Table.Cell>
              <Table.Cell>{category}</Table.Cell>
              <Table.Cell>
                <HStack>
                  <IconButton
                    size={"sm"}
                    aria-label="View"
                    colorPalette="green"
                    variant="outline"
                  >
                    <MdVisibility />
                  </IconButton>
                  <IconButton
                    size={"sm"}
                    aria-label="Edit"
                    colorPalette="blue"
                    variant="outline"
                  >
                    <MdEdit />
                  </IconButton>
                  <IconButton
                    size={"sm"}
                    aria-label="Delete"
                    colorPalette="red"
                    variant="outline"
                  >
                    <FaTrashAlt />
                  </IconButton>
                </HStack>
              </Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table.Root>
  );
};

export default DashboardProductsPage;
