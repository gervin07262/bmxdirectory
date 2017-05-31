require 'test_helper'

class CircuitControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get circuit_index_url
    assert_response :success
  end

  test "should get newedit" do
    get circuit_newedit_url
    assert_response :success
  end

end
